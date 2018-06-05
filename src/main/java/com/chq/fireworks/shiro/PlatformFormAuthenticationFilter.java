package com.chq.fireworks.shiro;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.common.constant.SystemConstant;
import com.chq.fireworks.common.util.ResponseUtil;
import com.chq.fireworks.model.User;
import com.chq.fireworks.qo.UserQuery;
import com.chq.fireworks.service.UserService;
import com.hzsun.framework.commons.utils.ExceptionUtil;
import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.apache.shiro.web.util.WebUtils;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class PlatformFormAuthenticationFilter extends FormAuthenticationFilter {

    private static Logger logger = Logger.getLogger(PlatformFormAuthenticationFilter.class);

    private UserService userService;

    protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object mappedValue) {
        if (isLoginRequest(request, response) && SecurityUtils.getSubject().isAuthenticated()) {
            try {
                WebUtils.issueRedirect(request, response, "/");
                return true;
            } catch (IOException e) {
                logger.error(ExceptionUtil.getTrace(e));
                return true;
            }
        }
        return super.isAccessAllowed(request, response, mappedValue);
    }

    protected boolean onLoginSuccess(AuthenticationToken token, Subject subject, ServletRequest request,
                                     ServletResponse response) throws Exception {
        HttpSession httpSession = ((HttpServletRequest) request).getSession();
        httpSession.setAttribute(SystemConstant.PLATFORM_SESSION, JSON.toJSONString(createAdminSession(subject)));
        ResponseUtil.output(response, new HashMap<String, Object>());
        return false;
    }

    @SuppressWarnings("unchecked")
    private PlatformSession createAdminSession(Subject subject) {
        PlatformSession platformSession = new PlatformSession();
        String userNum = (String) subject.getPrincipal();
        UserQuery userQuery = new UserQuery();
        userQuery.setUserNum(userNum);
        User user = userService.queryUser(userQuery).get(0);
        platformSession.setUserNum(userNum);
        platformSession.setUserName(user.getUserName());

        Object[] obj = userService.getUserRolePermission(userNum);
        if (null != obj) {
            platformSession.setModuleCodes((Set<String>) obj[1]);
        }
        return platformSession;
    }

    protected boolean onLoginFailure(AuthenticationToken token, AuthenticationException e, ServletRequest request,
                                     ServletResponse response) {
        Map<String, Object> resultMap = new HashMap<>();
        if (e instanceof UnknownAccountException) {
            resultMap.put("errmsg", "未知账户");
        } else if (e instanceof DisabledAccountException) {
            resultMap.put("errmsg", "账户已被禁用");
        } else if (e instanceof ExcessiveAttemptsException) {
            resultMap.put("errmsg", "密码错误次数过多,请10分钟后重新登录");
        } else if (e instanceof IncorrectCredentialsException) {
            resultMap.put("errmsg", "帐号或密码错误");
        } else {
            logger.error("登录时发生异常:" + ExceptionUtil.getTrace(e));
            resultMap.put("errmsg", "登录时发生未知错误");
        }

        ResponseUtil.output(response, resultMap);
        return false;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}

package com.chq.fireworks.shiro;

import com.chq.fireworks.common.constant.SystemConstant;
import com.chq.fireworks.model.User;
import com.chq.fireworks.qo.UserQuery;
import com.chq.fireworks.service.UserService;
import com.hzsun.framework.commons.utils.CollectionUtil;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Set;

public class PlatformRealm extends AuthorizingRealm {

    @Autowired
    private UserService userService;

    @SuppressWarnings("unchecked")
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        String userNum = (String) principals.getPrimaryPrincipal();
        Object[] objs = userService.getUserRolePermission(userNum);
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        info.addRoles((Set<String>) objs[0]);
        info.addStringPermissions((Set<String>) objs[1]);
        return info;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        UserQuery userQuery = new UserQuery();
        userQuery.setUserNum((String) token.getPrincipal());
        List<User> users = userService.queryUser(userQuery);
        if (CollectionUtil.isEmpty(users)) {
            throw new UnknownAccountException();
        }
        User user = users.get(0);
        if (user.getFlag().equals(SystemConstant.INVALID)) {
            throw new DisabledAccountException();
        }
        return new SimpleAuthenticationInfo(user.getUserNum(), user.getLoginPassword(), getName());
    }

}

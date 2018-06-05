package com.chq.fireworks.handler;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.common.BusinessException;
import com.chq.fireworks.common.constant.SystemConstant;
import com.hzsun.framework.commons.utils.ExceptionUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@Component
public class GlobalExceptionHandler implements HandlerExceptionResolver {

    private static Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        logger.error("系统异常:" + ExceptionUtil.getTrace(ex));
        if (!(request.getHeader("accept").contains("application/json") || (request.getHeader("X-Requested-With") != null && request.getHeader(
                "X-Requested-With").contains("XMLHttpRequest")))) {
            ModelAndView mv = new ModelAndView();
            mv.setViewName("error");
            String errmsg;
            if (ex instanceof BusinessException) {
                BusinessException be = (BusinessException) ex;
                errmsg = be.getMessage();
            } else {
                // TODO 调用日志服务入库
                errmsg = "系统异常，请联系管理员";
            }
            mv.addObject(SystemConstant.ERRMSG_KEY, errmsg);
            return mv;
        } else {
            try {
                Map<String, Object> resultMap = new HashMap<>();
                if (ex instanceof BusinessException) {
                    BusinessException be = (BusinessException) ex;
                    resultMap.put(SystemConstant.ERRMSG_KEY, be.getMessage());
                } else {
                    // TODO 调用日志服务入库
                    resultMap.put(SystemConstant.ERRMSG_KEY, "系统异常，请联系管理员");
                }

                PrintWriter pw = response.getWriter();
                pw.write(JSON.toJSONString(resultMap));
                pw.flush();
                pw.close();
            } catch (IOException e) {
                // TODO 调用日志服务入库
                logger.error("MyExceptionHandler IO异常:" + ExceptionUtil.getTrace(ex));
            }
            return null;
        }
    }

}

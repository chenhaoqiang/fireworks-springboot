package com.chq.fireworks.common.util;

import com.alibaba.fastjson.JSON;
import com.hzsun.framework.commons.utils.ExceptionUtil;
import org.apache.log4j.Logger;

import javax.servlet.ServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class ResponseUtil {

    private static Logger logger = Logger.getLogger(ResponseUtil.class);

    public static void output(ServletResponse response, Object obj) {
        response.setContentType("text/html;charset=utf-8");
        PrintWriter pw;
        try {
            pw = response.getWriter();
            pw.write(JSON.toJSONString(obj));
            pw.flush();
            pw.close();
        } catch (IOException ex) {
            // TODO 调用日志服务入库
            logger.error("ResponseUtil IO异常:" + ExceptionUtil.getTrace(ex));
        }
    }
}

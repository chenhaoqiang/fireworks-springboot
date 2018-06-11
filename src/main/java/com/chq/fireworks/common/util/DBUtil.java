package com.chq.fireworks.common.util;

import com.chq.fireworks.common.BusinessException;
import com.hzsun.framework.commons.utils.ExceptionUtil;
import org.apache.log4j.Logger;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBUtil {

    private static final Logger logger = Logger.getLogger(DBUtil.class);

    public static Connection getConnection(String host, Integer port, String serviceName, String userName, String password) {
        String url = "jdbc:oracle:thin:@//" + host + ":" + port + "/" + serviceName;
        return getConnection(url, userName, password);
    }

    public static Connection getConnection(String url, String userName, String password) {
        Connection conn;
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            conn = DriverManager.getConnection(url, userName, password);
        } catch (Exception e) {
            logger.error("连接Oracle数据库失败：" + ExceptionUtil.getTrace(e));
            throw new BusinessException("连接Oracle数据库失败：" + e.getMessage());
        }
        return conn;
    }
}

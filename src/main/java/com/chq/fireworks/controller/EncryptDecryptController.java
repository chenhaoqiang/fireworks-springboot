package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.common.BusinessException;
import com.chq.fireworks.common.util.AssertUtil;
import com.chq.fireworks.common.util.DBUtil;
import com.chq.fireworks.common.util.PasswordUtil;
import com.chq.fireworks.mapper.DataSourceMapper;
import com.chq.fireworks.model.DataSource;
import com.hzsun.framework.commons.utils.ExceptionUtil;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/encryptdecrypt")
public class EncryptDecryptController extends BaseController {

    private static final Logger logger = Logger.getLogger(EncryptDecryptController.class);

    @Autowired
    private DataSourceMapper dataSourceMapper;

    @RequestMapping(value = "/decryptPassword")
    public void decryptPassword(Integer dataSourceId, Integer secretKey, Integer type, PrintWriter pw) {
        DataSource dataSource = dataSourceMapper.selectByPrimaryKey(dataSourceId);
        Connection conn = DBUtil.getConnection(dataSource.getHost(), dataSource.getPort(), dataSource.getServiceName(), dataSource.getDataSourceUserName(), dataSource.getDataSourcePassword());
        try {
            String sql = getSelectSql(type);

            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setInt(1, secretKey);
            ResultSet rs = ps.executeQuery();

            boolean hasNext = rs.next();
            if (type.equals(1)) {
                AssertUtil.isTrue(hasNext, "账号不存在");
            } else if (type.equals(2)) {
                AssertUtil.isTrue(hasNext, "操作员编号不存在");
            } else if (type.equals(3)) {
                AssertUtil.isTrue(hasNext, "商户编号不存在");
            } else {
                throw new BusinessException("类型不正确");
            }
            String easytongPassword = rs.getString("password");
            ps.close();

            String decryptPassword = PasswordUtil.decryptEasytong(easytongPassword, secretKey).trim();
            Map<String, String> map = new HashMap<>();
            map.put("decryptPassword", decryptPassword);
            output(pw, JSON.toJSONString(map));
        } catch (SQLException e) {
            logger.error("解密失败：" + ExceptionUtil.getTrace(e));
            throw new BusinessException("解密失败：" + e.getMessage());
        } finally {
            if (null != conn) {
                try {
                    conn.close();
                } catch (SQLException e1) {
                    logger.error(e1);
                }
            }
        }
    }

    private String getSelectSql(Integer type) {
        String sql = null;
        switch (type) {
            case 1:
                sql = "SELECT paypwd as password FROM am_account WHERE accnum=?";
                break;
            case 2:
                sql = "SELECT logpwd as password FROM sc_operator WHERE optnum=?";
                break;
            case 3:
                sql = "SELECT logpwd as password FROM sc_business WHERE businessnum=?";
                break;
        }
        return sql;
    }

    @RequestMapping(value = "/encryptPassword")
    public void encryptPassword(String plainText, Integer secretKey, Integer type, PrintWriter pw) {
        String encryptPassword = PasswordUtil.encryptEasytong(plainText, secretKey);
        Map<String, String> map = new HashMap<>();
        map.put("encryptPassword", encryptPassword);
        output(pw, JSON.toJSONString(map));
    }

}

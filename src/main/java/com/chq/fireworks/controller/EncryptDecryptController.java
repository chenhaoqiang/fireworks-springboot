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
    public void decryptPassword(Integer dataSourceId, Integer accNum, PrintWriter pw) {
        DataSource dataSource = dataSourceMapper.selectByPrimaryKey(dataSourceId);
        Connection conn = DBUtil.getConnection(dataSource.getHost(), dataSource.getPort(), dataSource.getServiceName(), dataSource.getDataSourceUserName(), dataSource.getDataSourcePassword());
        try {
            String sql = "SELECT paypwd, accnum FROM am_account WHERE accnum=?";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setInt(1, accNum);
            ResultSet rs = ps.executeQuery();

            boolean hasNext = rs.next();
            AssertUtil.isTrue(hasNext, "易通账号不存在");
            String easytongPassword = rs.getString("paypwd");
            ps.close();

            String decryptPassword = PasswordUtil.decryptEasytong(easytongPassword, accNum).trim();
            Map<String, String> map = new HashMap<>();
            map.put("decryptPassword", decryptPassword);
            output(pw, JSON.toJSONString(map));
        } catch (SQLException e) {
            logger.error("查询易通账户失败：" + ExceptionUtil.getTrace(e));
            throw new BusinessException("查询易通账户失败：" + e.getMessage());
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

}

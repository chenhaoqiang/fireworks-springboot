package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.common.BusinessException;
import com.chq.fireworks.common.constant.ExtFieldType;
import com.chq.fireworks.vo.ExtFieldVO;
import com.hzsun.framework.commons.utils.ExceptionUtil;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.PrintWriter;
import java.lang.reflect.Field;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/public")
public class PublicController extends BaseController {

    private static final Logger logger = Logger.getLogger(PublicController.class);

    @RequestMapping(value = "/getModelFields", method = RequestMethod.POST)
    public void getModelFields(String modelName, String excludes, PrintWriter pw) throws ClassNotFoundException {
        List<ExtFieldVO> fieldVOList = new ArrayList<>();
        Class<?> c = Class.forName(modelName);
        Field[] fs = c.getDeclaredFields();

        for (Field f : fs) {
            if (null != excludes && f.getName().equals(excludes)) {
                continue;
            }
            String fieldType = f.getType().getSimpleName();
            String extFieldType = getExtFieldType(fieldType);
            if (null != extFieldType) {
                fieldVOList.add(new ExtFieldVO(f.getName(), extFieldType));
            }
        }

        output(pw, JSON.toJSONString(fieldVOList));
    }

    @RequestMapping(value = "/testConnection", method = RequestMethod.POST)
    public void testConnection(String url, String userName, String password, PrintWriter pw) {
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            Connection conn = DriverManager.getConnection(url, userName, password);
        } catch (Exception e) {
            logger.error("连接Oracle数据库失败：" + ExceptionUtil.getTrace(e));
            throw new BusinessException("连接Oracle数据库失败：" + e.getMessage());
        }
    }

    private String getExtFieldType(String fieldType) {
        String extFieldType = null;
        switch (fieldType) {
            case "Double":
                extFieldType = ExtFieldType.FLOAT;
                break;
            case "Long":
                extFieldType = ExtFieldType.INT;
                break;
            case "Integer":
                extFieldType = ExtFieldType.INT;
                break;
            case "BigDecimal":
                extFieldType = ExtFieldType.INT;
                break;
            case "Timestamp":
                extFieldType = ExtFieldType.STRING;
                break;
            case "Date":
                extFieldType = ExtFieldType.STRING;
                break;
            case "String":
                extFieldType = ExtFieldType.STRING;
                break;
            default:
                break;
        }
        return extFieldType;
    }
}

package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.common.constant.ExtFieldType;
import com.chq.fireworks.common.util.DBUtil;
import com.chq.fireworks.vo.ExtFieldVO;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.PrintWriter;
import java.lang.reflect.Field;
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
    public void testConnection(String host, Integer port, String serviceName, String dataSourceUserName, String dataSourcePassword, PrintWriter pw) {
        DBUtil.getConnection(host, port, serviceName, dataSourceUserName, dataSourcePassword);
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

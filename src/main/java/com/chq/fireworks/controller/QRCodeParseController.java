package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.hzsun.framework.commons.utils.QRCodeUtil;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/qrcodeparse")
public class QRCodeParseController extends BaseController {

    private static final Logger logger = Logger.getLogger(QRCodeParseController.class);

    @RequestMapping(value = "/parseQRCode")
    public void parseQRCode(String qrCode, String etClientId, PrintWriter pw) {
        Map<String, String> retMap = new HashMap<>();
        String[] arr;
        try {
            arr = QRCodeUtil.parseQrCode(qrCode, etClientId);
        } catch (Exception e) {
            retMap.put("errmsg", "未知二维码");
            output(pw, JSON.toJSONString(retMap));
            return;
        }
        String parseResult = transferQRCode(arr);
        retMap.put("parseResult", parseResult);
        output(pw, JSON.toJSONString(retMap));
    }

    private String transferQRCode(String[] arr) {
        StringBuilder sb = new StringBuilder();
        sb.append("版本号：").append(arr[0]).append("\r\n");
        sb.append("代理号：").append(arr[2]).append("\r\n");
        sb.append("平台客户号：").append(arr[3]).append("\r\n");
        processMainContent(arr, sb);
        return sb.toString();
    }

    private void processMainContent(String[] arr, StringBuilder sb) {
        String type = arr[1];
        sb.append("类型：").append(type).append("-");
        // 帐户：1 ；商户：2 ；商户（带交易金额）：3；考勤 4 ；门禁 5
        switch (type) {
            case "1":
                sb.append("账户码").append("\r\n");
                sb.append("帐号：").append(arr[4]).append("\r\n");
                sb.append("卡号：").append(arr[5]).append("\r\n");
                sb.append("姓名：").append(arr[6]).append("\r\n");
                sb.append("个人编号：").append(arr[7]).append("\r\n");
                sb.append("认证码：").append(arr[8]).append("\r\n");
                sb.append("卡账号：").append(arr[9]).append("\r\n");
                sb.append("生成时间：").append(arr[10]).append("\r\n");
                sb.append("校验码：").append(arr[11] == null ? "" : arr[11]);
                break;
            case "2":
                sb.append("商户码").append("\r\n");
                sb.append("设备编号：").append(arr[4]).append("\r\n");
                sb.append("终端号：").append(arr[5]).append("\r\n");
                sb.append("校验码：").append(arr[6] == null ? "" : arr[6]);
                break;
            case "3":
                sb.append("商户码带交易金额）").append("\r\n");
                sb.append("订单号：").append(arr[4]).append("\r\n");
                sb.append("交易金额：").append(arr[5]).append("\r\n");
                sb.append("设备编号：").append(arr[6]).append("\r\n");
                sb.append("终端号：").append(arr[7]).append("\r\n");
                sb.append("校验码：").append(arr[8] == null ? "" : arr[8]);
                break;
            case "4":
                sb.append("考勤码").append("\r\n");
                sb.append("设备号：").append(arr[4]).append("\r\n");
                sb.append("读卡器号：").append(arr[5]).append("\r\n");
                sb.append("秒数（距离2015年1月1日0点0分0秒的秒数）：").append(arr[6]).append("\r\n");
                sb.append("校验码：").append(arr[7] == null ? "" : arr[7]);
                break;
            case "5":
                sb.append("门禁码").append("\r\n");
                sb.append("设备号：").append(arr[4]).append("\r\n");
                sb.append("读卡器号：").append(arr[5]).append("\r\n");
                sb.append("秒数（距离2015年1月1日0点0分0秒的秒数）：").append(arr[6]).append("\r\n");
                sb.append("校验码：").append(arr[7] == null ? "" : arr[7]);
                break;
        }
    }

}

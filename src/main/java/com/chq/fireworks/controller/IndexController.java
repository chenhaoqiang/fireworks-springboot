package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.PrintWriter;

@Controller
public class IndexController extends BaseController {

    @Autowired
    private UserService userService;

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/getUserSession")
    public void getUserSession(PrintWriter pw) {
        Object platformSession = SecurityUtils.getSubject().getSession().getAttribute("platformSession");
        output(pw, JSON.toJSONString(platformSession));
    }
}

package com.chq.fireworks.controller;

import com.chq.fireworks.service.LogService;
import com.chq.fireworks.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController extends BaseController {

    @Autowired
    private UserService userService;
    @Autowired
    private LogService logService;

    @RequestMapping("/")
    public String index(Model model) {
        String softwareVersion = logService.getSoftwareVersion();
        model.addAttribute("softwareVersion", softwareVersion == null ? "未知版本" : softwareVersion);
        return "index";
    }

}

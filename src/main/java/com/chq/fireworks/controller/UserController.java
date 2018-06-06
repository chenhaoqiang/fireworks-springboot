package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.model.User;
import com.chq.fireworks.qo.UserQuery;
import com.chq.fireworks.service.UserService;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.PrintWriter;
import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController extends BaseController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/queryUser", method = RequestMethod.POST)
    public void queryUser(UserQuery userQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(userService.queryUser(userQuery)));
    }

    @RequestMapping(value = "/queryUserRole", method = RequestMethod.POST)
    public void queryUserRole(UserQuery userQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(userService.queryUserRole(userQuery)));
    }

    @RequestMapping(value = "/queryUserByPage", method = RequestMethod.POST)
    public void queryUserByPage(PageBean pageBean, UserQuery userQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(userService.queryUser(userQuery, pageBean)));
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public void addUser(User user, String roleNumJson, PrintWriter pw) {
        List<Integer> roleNumList = JSON.parseArray(roleNumJson, Integer.class);
        userService.addUser(user, roleNumList);
    }

    @RequestMapping(value = "/updateUser", method = RequestMethod.POST)
    public void updateUser(User user, String roleNumJson, PrintWriter pw) {
        List<Integer> roleNumList = JSON.parseArray(roleNumJson, Integer.class);
        userService.updateUser(user, roleNumList);
    }

    @RequestMapping(value = "/deleteUser", method = RequestMethod.POST)
    public void deleteUser(Integer userId, PrintWriter pw) {
        userService.deleteUser(userId);
    }

    @RequestMapping(value = "/updatePassword", method = RequestMethod.POST)
    public void updatePassword(Integer userId, String oriPassword, String newPassword, PrintWriter pw) {
        userService.updatePassword(userId, oriPassword, newPassword);
    }

    @RequestMapping(value = "/clearPassword", method = RequestMethod.POST)
    public void clearUserPassword(Integer userId, PrintWriter pw) {
        userService.clearPassword(userId);
    }

    @RequestMapping(value = "/queryUserRecentlyUseModule", method = RequestMethod.POST)
    public void queryUserRecentlyUseModule(Integer userId, PrintWriter pw) {
        output(pw, JSON.toJSONString(userService.queryUserRecentlyUseModule(userId)));
    }

    @RequestMapping(value = "/queryRecommendUseModule", method = RequestMethod.POST)
    public void queryRecommendUseModule(Integer userId, PrintWriter pw) {
        output(pw, JSON.toJSONString(userService.queryRecommendUseModule(userId)));
    }

    @RequestMapping(value = "/addUserModuleUse", method = RequestMethod.POST)
    public void addUserModuleUse(Integer userId, String moduleCode, PrintWriter pw) {
        userService.addUserModuleUse(userId, moduleCode);
    }

}

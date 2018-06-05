package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.model.Role;
import com.chq.fireworks.qo.RoleQuery;
import com.chq.fireworks.service.RoleService;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.PrintWriter;
import java.util.List;

@Controller
@RequestMapping("/role")
public class RoleController extends BaseController {

    @Autowired
    private RoleService roleService;

    @RequestMapping(value = "/queryRole", method = RequestMethod.POST)
    public void queryRole(RoleQuery roleQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(roleService.queryRole(roleQuery)));
    }

    @RequestMapping(value = "/queryRoleByPage", method = RequestMethod.POST)
    public void queryRoleByPage(PageBean pageBean, RoleQuery roleQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(roleService.queryRole(roleQuery, pageBean)));
    }

    @RequestMapping(value = "/addRole", method = RequestMethod.POST)
    public void addRole(Role role, String moduleCodeJson, PrintWriter pw) {
        List<String> moduleCodeList = JSON.parseArray(moduleCodeJson, String.class);
        roleService.addRole(role, moduleCodeList);
    }

    @RequestMapping(value = "/updateRole", method = RequestMethod.POST)
    public void updateRole(Role role, String moduleCodeJson, PrintWriter pw) {
        List<String> moduleCodeList = JSON.parseArray(moduleCodeJson, String.class);
        roleService.updateRole(role, moduleCodeList);
    }

    @RequestMapping(value = "/deleteRole", method = RequestMethod.POST)
    public void deleteRole(Integer roleNum, PrintWriter pw) {
        roleService.deleteRole(roleNum);
    }

}

package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.common.ExtCheckBoxTreeNode;
import com.chq.fireworks.common.ExtTreeNode;
import com.chq.fireworks.model.Module;
import com.chq.fireworks.qo.ModuleQuery;
import com.chq.fireworks.service.ModuleService;
import com.hzsun.framework.commons.PageBean;
import com.hzsun.framework.commons.utils.CollectionUtil;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/module")
public class ModuleController extends BaseController {

    @Autowired
    private ModuleService moduleService;

    @RequestMapping(value = "/queryModuleByPage", method = RequestMethod.POST)
    public void queryModuleByPage(PageBean pageBean, ModuleQuery moduleQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(moduleService.queryModule(moduleQuery, pageBean)));
    }

    @RequestMapping(value = "/queryModule", method = RequestMethod.POST)
    public void queryModule(ModuleQuery moduleQuery, PrintWriter pw) {
        List<Module> dtoList = moduleService.queryModule(moduleQuery);
        output(pw, JSON.toJSONString(dtoList));
    }

    @RequestMapping(value = "/addModule", method = RequestMethod.POST)
    public void addModule(Module module, PrintWriter pw) {
        moduleService.addModule(module);
    }

    @RequestMapping(value = "/updateModule", method = RequestMethod.POST)
    public void updateModule(Module module, PrintWriter pw) {
        moduleService.updateModule(module);
    }

    @RequestMapping(value = "/deleteModule", method = RequestMethod.POST)
    public void deleteModule(String moduleCode, PrintWriter pw) {
        moduleService.deleteModule(moduleCode);
    }

    @RequestMapping(value = "/queryModuleTree", method = RequestMethod.POST)
    public void queryModuleTree(ModuleQuery moduleQuery, PrintWriter pw) {
        List<ExtTreeNode> treeNodes = new ArrayList<>();
        List<Module> dtoList = moduleService.queryModule(moduleQuery);
        if (CollectionUtil.isNotEmpty(dtoList)) {
            convertToTreeNode(SecurityUtils.getSubject(), treeNodes, dtoList);
        }

        output(pw, JSON.toJSONString(treeNodes));
    }

    @RequestMapping(value = "/queryModuleTreeWithCheckBox", method = RequestMethod.POST)
    public void queryModuleTreeWithCheckBox(ModuleQuery moduleQuery, PrintWriter pw) {
        List<ExtCheckBoxTreeNode> treeNodes = new ArrayList<>();
        List<Module> dtoList = moduleService.queryModule(moduleQuery);
        if (CollectionUtil.isNotEmpty(dtoList)) {
            convertToCheckBoxTreeNode(treeNodes, dtoList);
        }

        output(pw, JSON.toJSONString(treeNodes));
    }

    @RequestMapping(value = "/queryModuleMenu", method = RequestMethod.POST)
    public void queryModuleMenu(PrintWriter pw) {
        List<ExtTreeNode> treeNodes = new ArrayList<>();
        List<Module> dtoList = moduleService.queryModuleMenu();
        if (CollectionUtil.isNotEmpty(dtoList)) {
            convertToTreeNode(SecurityUtils.getSubject(), treeNodes, dtoList);
        }

        output(pw, JSON.toJSONString(treeNodes));
    }

    private void convertToCheckBoxTreeNode(List<ExtCheckBoxTreeNode> treeNodes, List<Module> dtoList) {
        for (Module dto : dtoList) {
            // 最上级节点parentpermissionid == null
            if (null == dto.getParentCode()) {
                ExtCheckBoxTreeNode treeNode = new ExtCheckBoxTreeNode();
                treeNode.setId(dto.getModuleCode());
                treeNode.setText(dto.getModuleName());
                treeNode.setChildren(getChildrenCheckBoxTreeNode(dtoList, dto.getModuleCode()));
                treeNode.setCls(null);
                treeNode.setExpanded(true);
                treeNode.setModuleTag(dto.getModuleTag());
                // treeNode.setCls("node-link");
                treeNodes.add(treeNode);
            }
        }
    }

    private List<ExtCheckBoxTreeNode> getChildrenCheckBoxTreeNode(List<Module> dtoList, String parentModuleCode) {
        List<ExtCheckBoxTreeNode> childrenTreeNode = new ArrayList<>();
        for (Module dto : dtoList) {
            if (parentModuleCode.equals(dto.getParentCode())) {
                ExtCheckBoxTreeNode treeNode = new ExtCheckBoxTreeNode();
                treeNode.setId(dto.getModuleCode());
                treeNode.setText(dto.getModuleName());
                treeNode.setChildren(getChildrenCheckBoxTreeNode(dtoList, dto.getModuleCode()));
                treeNode.setCls(null);
                treeNode.setExpanded(true);
                treeNode.setModuleTag(dto.getModuleTag());
                // treeNode.setCls("node-link");
                childrenTreeNode.add(treeNode);
            }
        }

        return childrenTreeNode;
    }

    private void convertToTreeNode(Subject subject, List<ExtTreeNode> treeNodes, List<Module> dtoList) {
        for (Module dto : dtoList) {
            // 最上级节点parentpermissionid == null
            if (null == dto.getParentCode() && subject.isPermitted(dto.getModuleCode())) {
                ExtTreeNode treeNode = new ExtTreeNode();
                treeNode.setId(dto.getModuleCode());
                treeNode.setText(dto.getModuleName());
                treeNode.setChildren(getChildrenTreeNode(subject, dtoList, dto.getModuleCode()));
                treeNode.setExpanded(true);
                treeNode.setModuleTag(dto.getModuleTag());
                treeNode.setStyle(dto.getStyle());
                treeNodes.add(treeNode);
            }
        }
    }

    private List<ExtTreeNode> getChildrenTreeNode(Subject subject, List<Module> dtoList, String parentModuleCode) {
        List<ExtTreeNode> childrenTreeNode = new ArrayList<>();
        for (Module dto : dtoList) {
            if (parentModuleCode.equals(dto.getParentCode()) && subject.isPermitted(dto.getModuleCode())) {
                ExtTreeNode treeNode = new ExtTreeNode();
                treeNode.setId(dto.getModuleCode());
                treeNode.setText(dto.getModuleName());
                treeNode.setChildren(getChildrenTreeNode(subject, dtoList, dto.getModuleCode()));
                treeNode.setExpanded(true);
                treeNode.setModuleTag(dto.getModuleTag());
                treeNode.setStyle(dto.getStyle());
                childrenTreeNode.add(treeNode);
            }
        }

        return childrenTreeNode;
    }
}

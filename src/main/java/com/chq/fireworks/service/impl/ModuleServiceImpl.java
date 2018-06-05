package com.chq.fireworks.service.impl;

import com.chq.fireworks.mapper.ModuleMapper;
import com.chq.fireworks.model.Module;
import com.chq.fireworks.qo.ModuleQuery;
import com.chq.fireworks.service.ModuleService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("moduleService")
public class ModuleServiceImpl implements ModuleService {

    @Autowired
    private ModuleMapper moduleMapper;

    @Override
    public List<Module> queryModule(ModuleQuery moduleQuery) {
        return moduleMapper.queryModule(moduleQuery);
    }

    @Override
    public PageInfo<Module> queryModule(ModuleQuery moduleQuery, PageBean pageBean) {
        PageHelper.startPage(pageBean.getPage(), pageBean.getLimit());
        return new PageInfo<>(moduleMapper.queryModule(moduleQuery));
    }

    @Override
    public List<Module> queryModuleMenu() {
        return moduleMapper.queryModuleMenu();
    }

    @Override
    public void addModule(Module module) {
        moduleMapper.insert(module);
    }

    @Override
    public void updateModule(Module module) {
        moduleMapper.updateByPrimaryKeySelective(module);
    }

    @Override
    public void deleteModule(String moduleCode) {
        moduleMapper.deleteByPrimaryKey(moduleCode);
    }

}

package com.chq.fireworks.mapper;

import com.chq.fireworks.model.Module;
import com.chq.fireworks.qo.ModuleQuery;

import java.util.List;

public interface ModuleMapper {
    int deleteByPrimaryKey(String moduleCode);

    int insert(Module record);

    int insertSelective(Module record);

    Module selectByPrimaryKey(String moduleCode);

    int updateByPrimaryKeySelective(Module record);

    int updateByPrimaryKey(Module record);

    List<Module> queryModule(ModuleQuery moduleQuery);

    List<Module> queryModuleMenu();
}
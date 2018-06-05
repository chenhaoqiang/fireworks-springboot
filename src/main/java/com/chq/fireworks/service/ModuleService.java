package com.chq.fireworks.service;

import com.chq.fireworks.model.Module;
import com.chq.fireworks.qo.ModuleQuery;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;

import java.util.List;


/**
 * 功能模块服务。
 *
 * @author chenhaoqiang
 * @version fireworks 1.0
 * @since fireworks 1.0
 */
public interface ModuleService {

    /**
     * 查询功能模块。
     *
     * @param moduleQuery 查询对象
     * @return 功能模块集合
     */
    List<Module> queryModule(ModuleQuery moduleQuery);

    PageInfo<Module> queryModule(ModuleQuery moduleQuery, PageBean pageBean);

    /**
     * 查询功能模块菜单。
     *
     * @return 功能模块集合
     */
    List<Module> queryModuleMenu();

    void addModule(Module module);

    void updateModule(Module module);

    void deleteModule(String moduleCode);

}

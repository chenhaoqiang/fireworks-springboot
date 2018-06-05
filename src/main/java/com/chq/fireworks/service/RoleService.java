package com.chq.fireworks.service;

import com.chq.fireworks.model.Role;
import com.chq.fireworks.qo.RoleQuery;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;

import java.util.List;

/**
 * 角色服务。
 *
 * @author chenhaoqiang
 * @version fireworks 1.0
 * @since fireworks 1.0
 */
public interface RoleService {

    /**
     * 新增角色。
     *
     * @param role           角色信息
     * @param moduleCodeList 权限集合
     */
    void addRole(Role role, List<String> moduleCodeList);

    /**
     * 删除角色。
     *
     * @param roleId 角色ID
     */
    void deleteRole(Integer roleId);

    /**
     * 修改角色。
     *
     * @param role           角色信息
     * @param moduleCodeList 权限集合
     */
    void updateRole(Role role, List<String> moduleCodeList);

    /**
     * 查询角色。
     *
     * @param roleQuery 角色查询对象
     * @return 角色列表
     */
    List<Role> queryRole(RoleQuery roleQuery);

    /**
     * 查询角色（分页）。
     *
     * @param roleQuery 角色查询对象
     * @param pageBean  分页bean
     * @return 角色列表
     */
    PageInfo<Role> queryRole(RoleQuery roleQuery, PageBean pageBean);
}

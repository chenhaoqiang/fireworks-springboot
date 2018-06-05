package com.chq.fireworks.service.impl;

import com.chq.fireworks.common.constant.SystemConstant;
import com.chq.fireworks.common.constant.TableMaxNumEnum;
import com.chq.fireworks.common.util.AssertUtil;
import com.chq.fireworks.mapper.RoleMapper;
import com.chq.fireworks.mapper.RoleModuleMapper;
import com.chq.fireworks.model.Role;
import com.chq.fireworks.model.RoleModuleKey;
import com.chq.fireworks.qo.RoleQuery;
import com.chq.fireworks.service.RoleService;
import com.chq.fireworks.service.TableMaxNumService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;
import com.hzsun.framework.commons.utils.CollectionUtil;
import com.hzsun.framework.commons.utils.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("roleService")
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleMapper roleMapper;
    @Autowired
    private RoleModuleMapper roleModuleMapper;
    @Autowired
    private TableMaxNumService tableMaxNumService;

    @Override
    public void addRole(Role role, List<String> moduleCodeList) {
        checkAdd(role);
        Role record = new Role();
        Integer roleId = tableMaxNumService.updateAndGetMaxNum(TableMaxNumEnum.ROLE).intValue();
        role.setRoleId(roleId);
        role.setFlag(SystemConstant.VALID);
        roleMapper.insert(role);

        // 保存角色权限
        saveRoleModule(roleId, moduleCodeList);
    }

    @Override
    public void deleteRole(Integer roleId) {
        checkDelete(roleId);
        roleMapper.deleteByPrimaryKey(roleId);
    }

    @Override
    public void updateRole(Role role, List<String> moduleCodeList) {
        checkUpdate(role);
        roleMapper.updateByPrimaryKeySelective(role);
        saveRoleModule(role.getRoleId(), moduleCodeList);
    }

    @Override
    public List<Role> queryRole(RoleQuery roleQuery) {
        return roleMapper.queryRole(roleQuery);
    }

    @Override
    public PageInfo<Role> queryRole(RoleQuery roleQuery, PageBean pageBean) {
        PageHelper.startPage(pageBean.getPage(), pageBean.getLimit());
        return new PageInfo<>(roleMapper.queryRole(roleQuery));
    }

    private void checkUpdate(Role role) {
        AssertUtil.notNull(role.getRoleId(), "角色ID不存在");
        AssertUtil.isTrue(!role.getRoleId().equals(SystemConstant.SUPER_ROLEID), "超级角色不允许修改");
        AssertUtil.notNull(roleMapper.selectByPrimaryKey(role.getRoleId()), "角色不存在");
        commonCheck(role);
        RoleQuery roleQuery = new RoleQuery();
        roleQuery.setRoleNameFuzzyQuery(false);
        roleQuery.setRoleName(role.getRoleName());
        List<Role> roles = roleMapper.queryRole(roleQuery);
        AssertUtil.isTrue(
                CollectionUtil.isEmpty(roles) || (roles.size() == 1 && roles.get(0).getRoleId().equals(role.getRoleId())),
                "角色名称已存在");
    }

    private void checkDelete(Integer roleId) {
        AssertUtil.notNull(roleId, "角色ID不存在");
        AssertUtil.isTrue(!roleId.equals(SystemConstant.SUPER_ROLEID), "超级角色不允许删除");
        AssertUtil.notNull(roleMapper.selectByPrimaryKey(roleId), "角色不存在");
    }

    private void saveRoleModule(Integer roleId, List<String> moduleCodeList) {
        if (CollectionUtil.isEmpty(moduleCodeList)) {
            return;
        }

        List<RoleModuleKey> roleModules = roleModuleMapper.queryModules(roleId);
        // 原始集合为空的直接新增
        if (CollectionUtil.isEmpty(roleModules)) {
            for (String moduleCode : moduleCodeList) {
                insertRoleModules(roleId, moduleCode);
            }
            return;
        }

        // 转化为list
        List<String> oriModuleCodeList = new ArrayList<String>();
        for (RoleModuleKey key : roleModules) {
            oriModuleCodeList.add(key.getModuleCode());
        }

        for (String moduleCode : moduleCodeList) {
            if (!oriModuleCodeList.contains(moduleCode)) {
                insertRoleModules(roleId, moduleCode);
            }
        }

        for (String oriModuleCode : oriModuleCodeList) {
            if (!moduleCodeList.contains(oriModuleCode)) {
                deleteRoleModules(roleId, oriModuleCode);
            }
        }
    }

    private void insertRoleModules(Integer roleId, String moduleCode) {
        RoleModuleKey record = new RoleModuleKey();
        record.setRoleId(roleId);
        record.setModuleCode(moduleCode);
        roleModuleMapper.insert(record);
    }

    private void deleteRoleModules(Integer roleId, String moduleCode) {
        RoleModuleKey record = new RoleModuleKey();
        record.setRoleId(roleId);
        record.setModuleCode(moduleCode);
        roleModuleMapper.deleteByPrimaryKey(record);
    }

    private void checkAdd(Role role) {
        commonCheck(role);
        RoleQuery roleQuery = new RoleQuery();
        roleQuery.setRoleNameFuzzyQuery(false);
        roleQuery.setRoleName(role.getRoleName());
        AssertUtil.isEmpty(roleMapper.queryRole(roleQuery), "角色名称已存在");
    }

    private void commonCheck(Role role) {
        AssertUtil.isNotBlank(role.getRoleName(), "角色名称不能为空");
        AssertUtil.isTrue(StringUtil.getLength(role.getRoleName()) <= 32, "角色名称最多32个字符，中文为2个字符");
        AssertUtil.isTrue(StringUtil.isBlank(role.getRemark()) || StringUtil.getLength(role.getRemark()) <= 128, "备注最多128个字符，中文为2个字符");
    }

}

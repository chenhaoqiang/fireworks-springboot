package com.chq.fireworks.service.impl;

import com.chq.fireworks.common.constant.SystemConstant;
import com.chq.fireworks.common.constant.TableMaxNumEnum;
import com.chq.fireworks.common.util.AssertUtil;
import com.chq.fireworks.common.util.PasswordUtil;
import com.chq.fireworks.mapper.RoleModuleMapper;
import com.chq.fireworks.mapper.UserMapper;
import com.chq.fireworks.mapper.UserModuleUseMapper;
import com.chq.fireworks.mapper.UserRoleMapper;
import com.chq.fireworks.model.*;
import com.chq.fireworks.qo.UserQuery;
import com.chq.fireworks.service.TableMaxNumService;
import com.chq.fireworks.service.UserService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;
import com.hzsun.framework.commons.utils.CollectionUtil;
import com.hzsun.framework.commons.utils.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private RoleModuleMapper roleModuleMapper;
    @Autowired
    private UserRoleMapper userRoleMapper;
    @Autowired
    private TableMaxNumService tableMaxNumService;
    @Autowired
    private UserModuleUseMapper userModuleUseMapper;

    @Override
    public void addUser(User user, List<Integer> roleIdList) {
        checkAdd(user);
        Integer userId = tableMaxNumService.updateAndGetMaxNum(TableMaxNumEnum.USER).intValue();
        user.setUserId(userId);
        user.setLoginPassword(PasswordUtil.encrypt(SystemConstant.DEFAULT_USER_PWD, String.valueOf(user.getUserNum())));
        user.setIsDefaultPassword(SystemConstant.VALID);
        user.setFlag(SystemConstant.VALID);
        userMapper.insert(user);

        // 保存用户角色
        saveUserRole(userId, roleIdList);
    }

    @Override
    public void deleteUser(Integer userId) {
        checkDelete(userId);
        userMapper.deleteByPrimaryKey(userId);
    }

    @Override
    public void updateUser(User user, List<Integer> roleIdList) {
        checkUpdate(user);
        userMapper.updateByPrimaryKeySelective(user);
        saveUserRole(user.getUserId(), roleIdList);
    }

    @Override
    public List<User> queryUser(UserQuery userQuery) {
        return userMapper.queryUser(userQuery);
    }

    @Override
    public Object[] getUserRolePermission(String userNum) {
        UserQuery userQuery = new UserQuery();
        userQuery.setUserNum(userNum);
        User user = userMapper.queryUser(userQuery).get(0);
        List<UserRoleKey> roleList = userRoleMapper.queryRoles(user.getUserId());
        if (CollectionUtil.isEmpty(roleList)) {
            return null;
        }

        Set<String> roles = new HashSet<String>();
        Set<String> modules = new HashSet<String>();
        for (UserRoleKey role : roleList) {
            roles.add(String.valueOf(role.getRoleId()));
            List<RoleModuleKey> moduleList = roleModuleMapper.queryModules(role.getRoleId());
            if (CollectionUtil.isNotEmpty(moduleList)) {
                for (RoleModuleKey module : moduleList) {
                    modules.add(module.getModuleCode());
                }
            }
        }

        return new Object[]{roles, modules};
    }

    @Override
    public PageInfo<User> queryUser(UserQuery userQuery, PageBean pageBean) {
        PageHelper.startPage(pageBean.getPage(), pageBean.getLimit());
        return new PageInfo<>(userMapper.queryUser(userQuery));
    }

    @Override
    public void updatePassword(Integer userId, String oriPassword, String newPassword) {
        AssertUtil.notNull(userId, "用户ID不能为空");
        AssertUtil.isNotBlank(newPassword, "新密码不能为空");
        User user = userMapper.selectByPrimaryKey(userId);
        AssertUtil.isTrue(user.getLoginPassword().equals(PasswordUtil.encrypt(oriPassword, String.valueOf(user.getUserNum()))), "原密码不正确");

        User record = new User();
        record.setUserId(userId);
        record.setLoginPassword(PasswordUtil.encrypt(newPassword, String.valueOf(user.getUserNum())));
        userMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public void clearPassword(Integer userId) {
        AssertUtil.notNull(userId, "用户ID不能为空");

        User user = userMapper.selectByPrimaryKey(userId);
        User record = new User();
        record.setUserId(userId);
        record.setLoginPassword(PasswordUtil.encrypt(SystemConstant.DEFAULT_USER_PWD, String.valueOf(user.getUserNum())));
        userMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public List<Role> queryUserRole(UserQuery userQuery) {
        List<Role> roles = new ArrayList<>();
        List<UserRoleKey> userRoles = userRoleMapper.queryRoles(userQuery.getUserId());
        if (CollectionUtil.isNotEmpty(userRoles)) {
            for (UserRoleKey key : userRoles) {
                Role role = new Role();
                role.setRoleId(key.getRole().getRoleId());
                role.setRoleName(key.getRole().getRoleName());
                role.setRemark(key.getRole().getRemark());
                roles.add(role);
            }
        }
        return roles;
    }

    @Override
    public List<UserModuleUse> queryUserRecentlyUseModule(Integer userId) {
        return userModuleUseMapper.queryUserRecentlyUseModule(userId);
    }

    @Override
    public List<UserModuleUse> queryRecommendUseModule(Integer userId) {
        return userModuleUseMapper.queryRecommendUseModule(userId);
    }

    @Override
    public void addUserModuleUse(Integer userId, String moduleCode) {
        UserModuleUseKey key = new UserModuleUseKey();
        key.setModuleCode(moduleCode);
        key.setUserId(userId);
        UserModuleUse userModuleUse = userModuleUseMapper.selectByPrimaryKey(key);
        if (null == userModuleUse) {
            UserModuleUse record = new UserModuleUse();
            record.setUserId(userId);
            record.setModuleCode(moduleCode);
            record.setLastUseTime(new Date());
            record.setUseTimes(1);
            userModuleUseMapper.insert(record);
        } else {
            userModuleUse.setLastUseTime(new Date());
            userModuleUse.setUseTimes(userModuleUse.getUseTimes() + 1);
            userModuleUseMapper.updateByPrimaryKeySelective(userModuleUse);
        }

    }

    private void saveUserRole(Integer userId, List<Integer> roleIdList) {
        if (CollectionUtil.isEmpty(roleIdList)) {
            return;
        }

        List<UserRoleKey> optRoles = userRoleMapper.queryRoles(userId);
        // 原始集合为空的直接新增
        if (CollectionUtil.isEmpty(optRoles)) {
            for (Integer roleId : roleIdList) {
                insertOptRoles(userId, roleId);
            }
            return;
        }

        // 转化为list
        List<Integer> oriRoleIdList = new ArrayList<Integer>();
        for (UserRoleKey key : optRoles) {
            oriRoleIdList.add(key.getRoleId());
        }

        for (Integer roleId : roleIdList) {
            if (!oriRoleIdList.contains(roleId)) {
                insertOptRoles(userId, roleId);
            }
        }

        for (Integer oriRoleId : oriRoleIdList) {
            if (!roleIdList.contains(oriRoleId)) {
                deleteOptRoles(userId, oriRoleId);
            }
        }

    }

    private void insertOptRoles(Integer userId, Integer roleId) {
        UserRoleKey record = new UserRoleKey();
        record.setUserId(userId);
        record.setRoleId(roleId);
        userRoleMapper.insert(record);
    }

    private void deleteOptRoles(Integer userId, Integer roleId) {
        UserRoleKey record = new UserRoleKey();
        record.setUserId(userId);
        record.setRoleId(roleId);
        userRoleMapper.deleteByPrimaryKey(record);
    }

    private void checkAdd(User user) {
        commonCheck(user);
        UserQuery userQuery = new UserQuery();
        userQuery.setUserNameFuzzyQuery(false);
        userQuery.setUserName(user.getUserName());
        AssertUtil.isEmpty(userMapper.queryUser(userQuery), "用户名称已存在");
    }

    private void commonCheck(User user) {
        AssertUtil.isNotBlank(user.getUserName(), "用户名称不能为空");
        AssertUtil.isTrue(StringUtil.getLength(user.getUserName()) <= 32, "用户名称最多32个字符，中文为2个字符");
        AssertUtil.isTrue(StringUtil.isBlank(user.getRemark()) || StringUtil.getLength(user.getRemark()) <= 128,
                "备注最多128个字符，中文为2个字符");
    }

    private void checkDelete(Integer userId) {
        AssertUtil.notNull(userId, "用户ID不能为空");
        User user = userMapper.selectByPrimaryKey(userId);
        AssertUtil.notNull(user, "用户不存在");
        AssertUtil.isTrue(!user.getUserNum().equals(SystemConstant.SUPER_USERNUM), "超级用户不允许删除");
    }

    private void checkUpdate(User user) {
        AssertUtil.notNull(user.getUserId(), "用户ID不能为空");
        AssertUtil.notNull(user.getUserNum(), "用户编号不能为空");
        AssertUtil.isTrue(!user.getUserNum().equals(SystemConstant.SUPER_USERNUM), "超级用户不允许修改");
        AssertUtil.notNull(userMapper.selectByPrimaryKey(user.getUserId()), "用户不存在");
        commonCheck(user);
        UserQuery userQuery = new UserQuery();
        userQuery.setUserNameFuzzyQuery(false);
        userQuery.setUserName(user.getUserName());
        List<User> users = userMapper.queryUser(userQuery);
        AssertUtil.isTrue(CollectionUtil.isEmpty(users)
                || (users.size() == 1 && users.get(0).getUserNum().equals(user.getUserNum())), "用户名称已存在");
    }

}

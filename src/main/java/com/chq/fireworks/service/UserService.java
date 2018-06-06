package com.chq.fireworks.service;

import com.chq.fireworks.model.Role;
import com.chq.fireworks.model.User;
import com.chq.fireworks.model.UserModuleUse;
import com.chq.fireworks.qo.UserQuery;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;

import java.util.List;

public interface UserService {

    /**
     * 新增用户。
     *
     * @param user       用户信息
     * @param roleIdList 用户角色ID集合
     */
    void addUser(User user, List<Integer> roleIdList);

    /**
     * 删除用户。
     *
     * @param userId 用户ID
     */
    void deleteUser(Integer userId);

    /**
     * 修改用户。
     *
     * @param user       用户信息
     * @param roleIdList 用户角色ID集合
     */
    void updateUser(User user, List<Integer> roleIdList);

    /**
     * 查询用户。
     *
     * @param userQuery 用户查询对象
     * @return 用户列表
     */
    List<User> queryUser(UserQuery userQuery);

    /**
     * 获取用户角色权限。
     *
     * @param userNum 用户编号
     * @return Object[] 0:Set<String>角色编号集合 1:Set<String>功能模块编号集合
     */
    Object[] getUserRolePermission(String userNum);

    /**
     * 查询用户（分页）。
     *
     * @param userQuery 用户查询对象
     * @param pageBean  分页bean
     * @return 用户列表
     */
    PageInfo<User> queryUser(UserQuery userQuery, PageBean pageBean);

    void updatePassword(Integer userId, String oriPassword, String newPassword);

    void clearPassword(Integer userId);

    List<Role> queryUserRole(UserQuery userQuery);

    /**
     * 查询用户最近使用模块，取10条。
     *
     * @param userId 用户ID
     * @return 模块集合
     */
    List<UserModuleUse> queryUserRecentlyUseModule(Integer userId);

    /**
     * 查询推荐使用模块，根据所有用户使用情况统计，取10条。
     *
     * @param userId 用户ID
     * @return 模块集合
     */
    List<UserModuleUse> queryRecommendUseModule(Integer userId);

    /**
     * 插入用户模块使用情况
     *
     * @param userId     用户ID
     * @param moduleCode 模块编号
     */
    void addUserModuleUse(Integer userId, String moduleCode);
}

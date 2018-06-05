package com.chq.fireworks.mapper;

import com.chq.fireworks.model.Role;
import com.chq.fireworks.qo.RoleQuery;

import java.util.List;

public interface RoleMapper {
    int deleteByPrimaryKey(Integer roleId);

    int insert(Role record);

    int insertSelective(Role record);

    Role selectByPrimaryKey(Integer roleId);

    int updateByPrimaryKeySelective(Role record);

    int updateByPrimaryKey(Role record);

    List<Role> queryRole(RoleQuery roleQuery);
}
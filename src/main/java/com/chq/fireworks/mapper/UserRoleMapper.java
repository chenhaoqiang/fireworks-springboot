package com.chq.fireworks.mapper;

import com.chq.fireworks.model.UserRoleKey;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserRoleMapper {
    int deleteByPrimaryKey(UserRoleKey key);

    int insert(UserRoleKey record);

    int insertSelective(UserRoleKey record);

    List<UserRoleKey> queryRoles(@Param("userId") Integer userId);
}
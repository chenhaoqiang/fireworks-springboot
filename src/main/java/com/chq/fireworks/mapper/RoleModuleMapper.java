package com.chq.fireworks.mapper;

import com.chq.fireworks.model.RoleModuleKey;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RoleModuleMapper {
    int deleteByPrimaryKey(RoleModuleKey key);

    int insert(RoleModuleKey record);

    int insertSelective(RoleModuleKey record);

    List<RoleModuleKey> queryModules(@Param("roleId") Integer roleId);
}
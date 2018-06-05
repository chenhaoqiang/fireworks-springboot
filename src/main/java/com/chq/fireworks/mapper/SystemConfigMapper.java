package com.chq.fireworks.mapper;

import com.chq.fireworks.model.SystemConfig;

public interface SystemConfigMapper {
    int deleteByPrimaryKey(String cfgCode);

    int insert(SystemConfig record);

    int insertSelective(SystemConfig record);

    SystemConfig selectByPrimaryKey(String cfgCode);

    int updateByPrimaryKeySelective(SystemConfig record);

    int updateByPrimaryKey(SystemConfig record);
}
package com.chq.fireworks.mapper;

import com.chq.fireworks.model.UpgradeLog;

import java.util.List;

public interface UpgradeLogMapper {
    int deleteByPrimaryKey(Integer logId);

    int insert(UpgradeLog record);

    int insertSelective(UpgradeLog record);

    UpgradeLog selectByPrimaryKey(Integer logId);

    int updateByPrimaryKeySelective(UpgradeLog record);

    int updateByPrimaryKey(UpgradeLog record);

    List<UpgradeLog> queryUpgradeLog();

    String getSoftwareVersion();
}
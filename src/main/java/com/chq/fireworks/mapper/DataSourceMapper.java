package com.chq.fireworks.mapper;

import com.chq.fireworks.model.DataSource;
import com.chq.fireworks.qo.DataSourceQuery;

import java.util.List;

public interface DataSourceMapper {
    int deleteByPrimaryKey(Integer dataSourceId);

    int insert(DataSource record);

    int insertSelective(DataSource record);

    DataSource selectByPrimaryKey(Integer dataSourceId);

    int updateByPrimaryKeySelective(DataSource record);

    int updateByPrimaryKey(DataSource record);

    List<DataSource> queryDataSource(DataSourceQuery dataSourceQuery);
}
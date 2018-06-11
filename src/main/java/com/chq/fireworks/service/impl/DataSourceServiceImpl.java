package com.chq.fireworks.service.impl;

import com.chq.fireworks.mapper.DataSourceMapper;
import com.chq.fireworks.model.DataSource;
import com.chq.fireworks.qo.DataSourceQuery;
import com.chq.fireworks.service.DataSourceService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service("dataSourceService")
public class DataSourceServiceImpl implements DataSourceService {

    @Autowired
    private DataSourceMapper dataSourceMapper;

    @Override
    public List<DataSource> queryDataSource(DataSourceQuery dataSourceQuery) {
        return dataSourceMapper.queryDataSource(dataSourceQuery);
    }

    @Override
    public PageInfo<DataSource> queryDataSource(DataSourceQuery dataSourceQuery, PageBean pageBean) {
        PageHelper.startPage(pageBean.getPage(), pageBean.getLimit());
        return new PageInfo<>(dataSourceMapper.queryDataSource(dataSourceQuery));
    }

    @Override
    public void addDataSource(DataSource dataSource) {
        dataSource.setDataSourceType(1);
        dataSource.setCreateTime(new Date());
        dataSourceMapper.insertSelective(dataSource);
    }

    @Override
    public void updateDataSource(DataSource dataSource) {
        dataSource.setUpdateTime(new Date());
        dataSourceMapper.updateByPrimaryKeySelective(dataSource);
    }

    @Override
    public void deleteDataSource(Integer dataSourceId) {
        dataSourceMapper.deleteByPrimaryKey(dataSourceId);
    }
}

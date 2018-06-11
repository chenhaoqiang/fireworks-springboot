package com.chq.fireworks.service;

import com.chq.fireworks.model.DataSource;
import com.chq.fireworks.qo.DataSourceQuery;
import com.github.pagehelper.PageInfo;
import com.hzsun.framework.commons.PageBean;

import java.util.List;

public interface DataSourceService {
    List<DataSource> queryDataSource(DataSourceQuery dataSourceQuery);

    PageInfo<DataSource> queryDataSource(DataSourceQuery dataSourceQuery, PageBean pageBean);

    void addDataSource(DataSource dataSource);

    void updateDataSource(DataSource dataSource);

    void deleteDataSource(Integer dataSourceId);
}

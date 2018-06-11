package com.chq.fireworks.controller;

import com.alibaba.fastjson.JSON;
import com.chq.fireworks.model.DataSource;
import com.chq.fireworks.qo.DataSourceQuery;
import com.chq.fireworks.service.DataSourceService;
import com.hzsun.framework.commons.PageBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.PrintWriter;

@Controller
@RequestMapping("/datasource")
public class DataSourceController extends BaseController {

    @Autowired
    private DataSourceService dataSourceService;

    @RequestMapping(value = "/queryDataSource", method = RequestMethod.POST)
    public void queryDataSource(DataSourceQuery dataSourceQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(dataSourceService.queryDataSource(dataSourceQuery)));
    }

    @RequestMapping(value = "/queryDataSourceByPage", method = RequestMethod.POST)
    public void queryDataSourceByPage(PageBean pageBean, DataSourceQuery dataSourceQuery, PrintWriter pw) {
        output(pw, JSON.toJSONString(dataSourceService.queryDataSource(dataSourceQuery, pageBean)));
    }

    @RequestMapping(value = "/addDataSource", method = RequestMethod.POST)
    public void addDataSource(DataSource dataSource, PrintWriter pw) {
        dataSourceService.addDataSource(dataSource);
    }

    @RequestMapping(value = "/updateDataSource", method = RequestMethod.POST)
    public void updateDataSource(DataSource dataSource, PrintWriter pw) {
        dataSourceService.updateDataSource(dataSource);
    }

    @RequestMapping(value = "/deleteDataSource", method = RequestMethod.POST)
    public void deleteDataSource(Integer dataSourceId, PrintWriter pw) {
        dataSourceService.deleteDataSource(dataSourceId);
    }

}

package com.chq.fireworks.qo;

import java.io.Serializable;

public class DataSourceQuery implements Serializable {

    private static final long serialVersionUID = -7116830165758108745L;

    private String dataSourceName;

    /**
     * 数据源名称是否模糊查询，默认是
     */
    private boolean isDataSourceNameFuzzyQuery = true;

    public String getDataSourceName() {
        return dataSourceName;
    }

    public void setDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
    }

    public boolean isDataSourceNameFuzzyQuery() {
        return isDataSourceNameFuzzyQuery;
    }

    public void setDataSourceNameFuzzyQuery(boolean dataSourceNameFuzzyQuery) {
        isDataSourceNameFuzzyQuery = dataSourceNameFuzzyQuery;
    }
}

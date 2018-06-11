Ext.define("App.model.DataSource", {
    extend: "Ext.data.Model",
    fields: [
        'createTime',
        'dataSourceId',
        'dataSourceName',
        'dataSourceType',
        'host',
        'port',
        'serviceName',
        'userId',
        'dataSourceUserName',
        'dataSourcePassword'
    ]
});

Ext.define('App.view.datasource.DataSourceWin', {
    extend: 'Hzsun.window.Window',
    xtype: 'datasourcewin',
    width: 400,
    height: 300,
    id: 'dataSourceWin',

    requires: ['App.view.datasource.DataSourceController'],
    viewModel: {
        type: 'datasourcewin'
    },
    controller: 'datasource',

    items: [{
        xtype: 'hzsunform',
        items: [{
            xtype: 'hidden',
            name: 'userId',
            value: comm.get('platformSession').userId
        },{
            xtype: 'hidden',
            name: 'dataSourceId'
        }, {
            xtype: 'hzsuntextfield',
            itemId: 'dataSourceName',
            name: 'dataSourceName',
            fieldLabel: '数据源名称',
            allowBlank: false
        }, {
            xtype: 'hzsuntextfield',
            name: 'host',
            fieldLabel: 'IP地址',
            allowBlank: false
        }, {
            xtype: 'hzsunnumberfield',
            name: 'port',
            fieldLabel: '端口',
            allowBlank: false
        }, {
            xtype: 'hzsuntextfield',
            name: 'serviceName',
            fieldLabel: '服务名',
            allowBlank: false
        }, {
            xtype: 'hzsuntextfield',
            name: 'dataSourceUserName',
            fieldLabel: '用户名',
            allowBlank: false
        }, {
            xtype: 'hzsuntextfield',
            inputType: 'password',
            name: 'dataSourcePassword',
            fieldLabel: '密码',
            allowBlank: false
        }]
    }],
    buttons: [{
        text: '测试连接',
        handler: 'testConnection'
    }, {
        text: '保存',
        handler: 'saveDataSource'
    }, {
        text: '取消',
        handler: 'cancel'
    }],

    initComponent: function () {
        this.callParent(arguments);
    }
});
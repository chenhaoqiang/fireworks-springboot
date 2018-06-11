Ext.define('App.view.datasource.DataSource', {
    extend: 'Hzsun.ux.SimpleGrid',
    xtype: 'datasource',
    title: '数据源管理',
    id: 'dataSourceGrid',
    selType: 'rowmodel',
    requires: ['App.view.datasource.DataSourceModel', 'App.view.datasource.DataSourceController'],
    viewModel: {
        type: 'datasource'
    },
    controller: 'datasource',
    border: true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    bind: {
        store: '{pagedatasource}'
    },

    columns: [{
        text: '数据源名称',
        dataIndex: 'dataSourceName',
        width: 160
    }, {
        text: 'IP地址',
        dataIndex: 'host',
        width: 140
    }, {
        text: '端口',
        dataIndex: 'port',
        width: 60
    }, {
        text: '服务名',
        dataIndex: 'serviceName',
        width: 100
    }, {
        text: '创建时间',
        dataIndex: 'createTime',
        width: 160
    }, {
        text: '修改时间',
        dataIndex: 'updateTime',
        width: 160
    }],

    functionButtons: [{
        text: '新增',
        glyph: 0xf055,
        moduleCode: '0010401',
        handler: 'openAddDataSourceWin'
    }, {
        text: '修改',
        glyph: 0xf044,
        moduleCode: '0010402',
        handler: 'openUpdateDataSourceWin'
    }, {
        text: '删除',
        glyph: 0xf056,
        moduleCode: '0010403',
        handler: 'deleteDataSource'
    }],

    queryItems: [{
        xtype: 'hzsuntextfield',
        name: 'dataSourceName',
        fieldLabel: '数据源名称',
        labelWidth: 70
    }],

    bbar: {
        xtype: 'hzsunpagingtoolbar',
        bind: {
            store: '{pagedatasource}'
        }
    },

    listeners: {
        'itemcontextmenu': 'onItemContextMenu'
    },

    initComponent: function () {
        this.callParent(arguments);
    }

});
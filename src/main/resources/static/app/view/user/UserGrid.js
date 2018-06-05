/*
 * 视图 - 用户grid
 */
Ext.define('App.view.user.UserGrid', {
    extend: 'Hzsun.ux.SimpleGrid',
    xtype: 'usergrid',
    id: 'userGrid',
    title: '用户列表',
    border: true,
    selType: 'rowmodel',
    bind: {
        store: '{pageuser}'
    },

    columns: [{
        text: '用户编号',
        dataIndex: 'userNum',
        width: 120
    }, {
        text: '用户名称',
        dataIndex: 'userName',
        width: 120
    }, {
        text: '证件类型',
        dataIndex: 'idTypeName',
        width: 100
    }, {
        text: '证件号码',
        dataIndex: 'idNo',
        width: 180
    }, {
        text: '手机号码',
        dataIndex: 'phoneNo',
        width: 140
    }, {
        text: '邮箱',
        dataIndex: 'email',
        width: 180
    }, {
        text: '备注',
        dataIndex: 'remark',
        width: 120
    }],

    functionButtons: [{
        text: '新增',
        glyph: 0xf055,
        moduleCode: '0010201',
        handler: 'openAddUserWin'
    }, {
        text: '修改',
        glyph: 0xf044,
        moduleCode: '0010202',
        handler: 'openUpdateUserWin'
    }, {
        text: '清密',
        glyph: 0xf044,
        moduleCode: '0010204',
        handler: 'clearUserPassword'
    }, {
        text: '删除',
        glyph: 0xf056,
        moduleCode: '0010203',
        handler: 'deleteUser'
    }],

    queryItems: [{
        xtype: 'hzsuntextfield',
        fieldLabel: '用户名称',
        itemId: 'userName',
        labelWidth: 80
    }],

    bbar: {
        xtype: 'hzsunpagingtoolbar',
        bind: {
            store: '{pageuser}'
        }
    },

    listeners: {
        'itemcontextmenu': 'onItemContextMenu',
        'selectionchange': 'onSelectionchange'
    },

    initComponent: function () {
        this.callParent(arguments);
    }
});

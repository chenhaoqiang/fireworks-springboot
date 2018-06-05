/*
 * 视图 - 用户管理
 */
Ext.define('App.view.user.User', {
    extend: 'Hzsun.panel.Panel',
    xtype: 'user',
    title: '用户管理',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    requires: [
        'App.view.user.UserModel',
        'App.view.user.UserController',
        'App.view.user.UserGrid',
        'App.view.user.UserRoleGrid'
    ],
    viewModel: {
        type: 'user'
    },
    controller: 'user',

    items: [{
        xtype: 'usergrid',
        flex: 7
    }, {
        xtype: 'userrolegrid',
        flex: 3
    }],

    initComponent: function () {
        this.callParent(arguments);
    }
});
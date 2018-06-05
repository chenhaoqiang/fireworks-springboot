/* 
 * 视图 - 首页
 */
Ext.define("App.view.desktop.Desktop", {
    extend: "Ext.panel.Panel",
    xtype: "desktop",
    requires: [
        "App.view.desktop.DesktopModel",
        "App.view.desktop.DesktopController"
    ],
    viewModel: {type: "desktop"},
    controller: "desktop",

    title: "首页",
    border: true,
    layout:'fit',

    items: [{
        xtype: 'hzsunimageview',
        store: Ext.create('Ext.data.Store', {
            id: 'imagesStore',
            fields: ['caption', 'items'],
            data: [{
                caption: '最近使用',
                items: [{
                    src: 'lib/img/modules/role.png',
                    name: '角色管理'
                }, {
                    src: 'lib/img/modules/user.png',
                    name: '用户管理'
                }, {
                    src: 'lib/img/modules/module.png',
                    name: '功能模块'
                }]
            }, {
                caption: '为你推荐',
                items: [{
                    src: 'lib/img/modules/role.png',
                    name: '角色管理'
                }, {
                    src: 'lib/img/modules/user.png',
                    name: '用户管理'
                }, {
                    src: 'lib/img/modules/module.png',
                    name: '功能模块'
                }]
            }, {
                caption: '管理中心',
                items: [{
                    src: 'lib/img/modules/role.png',
                    name: '角色管理'
                }, {
                    src: 'lib/img/modules/user.png',
                    name: '用户管理'
                }, {
                    src: 'lib/img/modules/module.png',
                    name: '功能模块'
                }, {
                    src: 'lib/img/modules/module.png',
                    name: '数据字典'
                }]
            }, {
                caption: '工具箱',
                items: [{
                    src: 'lib/img/modules/module.png',
                    name: '我的任务'
                }, {
                    src: 'lib/img/modules/module.png',
                    name: '我的笔记'
                }]
            }]
        })
    }],

    initComponent: function () {
        this.callParent(arguments);
    }
});
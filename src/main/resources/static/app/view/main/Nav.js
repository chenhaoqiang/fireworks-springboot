/*
 * 导航菜单
 */
Ext.define("App.view.main.Nav", {
    extend: "Hzsun.tree.Panel",
    xtype: "nav",
    id: "nav",

    title: "导航菜单",
    collapsible: true,
    // split: true,
    autoScroll: true,
    margin: "0 5 0 5",
    width: 225,
    border: true,

    rootVisible: false,
    bind: {
        store: '{modulemenu}'
    },

    listeners: {
        itemclick: "onMenuClick"
    },

    initComponent: function () {
        this.callParent(arguments);
    }
});

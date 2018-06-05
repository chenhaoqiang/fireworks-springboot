/*
 * 主题内容
 */
Ext.define("App.view.main.Content", {
    extend: "Ext.tab.Panel",
    xtype: "content",
    id: "mainContent",
    uses: ["App.view.desktop.Desktop"],
    plugins: Ext.create('Hzsun.ux.TabCloseMenu', {
        closeTabText: '关闭当前页',
        closeOthersTabsText: '关闭其他页',
        closeAllTabsText: '关闭所有页'
    }),

    initComponent: function () {
        Ext.apply(this, {
            border: false,
            margin: "0 5 0 0",
            layout: "fit",
            items: [{
                xtype: "desktop",
                itemId: "desktop",
                closable: false
            }]
        });
        this.callParent(arguments);
    }
});

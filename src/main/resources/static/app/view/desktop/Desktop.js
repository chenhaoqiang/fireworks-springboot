/* 
 * 视图 - 首页
 */
Ext.define("App.view.desktop.Desktop", {
    extend: "Hzsun.panel.Panel",
    xtype: "desktop",
    id: 'desktop',
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
        onImageClick : function (event, el, o) {
            var navTree = Ext.getCmp('nav');
            var record = navTree.getStore().getNodeById(el.getAttribute('moduleCode'));
            navTree.fireEvent('itemclick', navTree, record);
        }
    }],

    initComponent: function () {
        this.callParent(arguments);
    }
});
Ext.define("App.view.upgradelog.UpgradeLog", {
    extend: "Hzsun.panel.Panel",
    xtype: "upgradelog",
    id: 'upgradelog',
    requires: [
        "Hzsun.ux.UpgradeLogView"
    ],

    title: "升级日志",
    border: true,
    layout: 'fit',

    items: [{
        xtype: 'hzsunupgradelogview',
        store: Ext.create('Hzsun.data.Store', {
            fields: ['upgradeTime', 'softwareVersion', 'upgradeUser', 'upgradeLogs'],
            autoLoad: true,
            proxy: {
                type: "hzsunajax",
                url: "upgradeLog/queryUpgradeLog"
            }
        })
    }],

    initComponent: function () {
        this.callParent(arguments);
    }
});
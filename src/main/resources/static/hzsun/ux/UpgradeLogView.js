Ext.define('Hzsun.ux.UpgradeLogView', {
    extend: 'Ext.view.View',
    xtype: 'hzsunupgradelogview',
    autoScroll: true,

    tpl: [
        '<div class="hzsun-upgradelogview">',
        '<tpl for=".">',
        '<h2>{upgradeTime} v{softwareVersion}正式版发布</h2>',
        '<ol>',
        '<tpl for="upgradeLogs">',
        '<li>{.}</li>',
        '</tpl>',
        '</ol>',
        '</tpl>',
        '</div>'
    ],

    itemSelector: 'div.hzsun-upgradelogview',
    emptyText: '没有数据',

    initComponent: function () {
        this.callParent(arguments);
    }
});
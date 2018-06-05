Ext.define('Hzsun.ux.ImageView', {
    extend: 'Ext.view.View',
    xtype: 'hzsunimageview',
    autoScroll: true,

    tpl: [
        '<tpl for=".">',
        '<div class="hzsun-imageview">',
        '<h4><strong>{caption}</strong></h4>',
        '<ul>',
        '<tpl for="items">',
        '<li><a href="javascript:void(0);">',
        '<img src="{src}" /><br>{name}',
        '</a></li>',
        '</tpl>',
        '</ul>',
        '</div>',
        '</tpl>'
    ],

    itemSelector: 'div.hzsun-imageview',
    emptyText: '没有数据',

    initComponent: function () {
        this.callParent(arguments);
    }
});
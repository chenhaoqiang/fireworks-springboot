Ext.define('Hzsun.ux.ImageView', {
    extend: 'Ext.view.View',
    xtype: 'hzsunimageview',
    autoScroll: true,

    imageSelector:'.hzsun-imageview-image',

    tpl: [
        '<tpl for=".">',
        '<div class="hzsun-imageview">',
        '<h4><strong>{caption}</strong></h4>',
        '<ul>',
        '<tpl for="items">',
        '<li><a href="javascript:void(0);" class="hzsun-imageview-image" moduleCode="{moduleCode}">',
        '<img src="{src}" /><br>{name}',
        '</a></li>',
        '</tpl>',
        '</ul>',
        '</div>',
        '</tpl>'
    ],

    itemSelector: 'div.hzsun-imageview',
    emptyText: '没有数据',

    afterRender: function() {
        var me = this;
        me.callParent();
        me.el.on({
            click: {
                delegate: me.imageSelector,
                fn: me.onImageClick ? me.onImageClick : Ext.emptyFn,
                scope: me
            }
        });
    },

    initComponent: function () {
        this.callParent(arguments);
    }
});
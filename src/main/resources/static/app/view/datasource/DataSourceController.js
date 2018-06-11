Ext.define('App.view.datasource.DataSourceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.datasource',

    init: function () {
    },

    openAddDataSourceWin: function (btn) {
        var win = Ext.create('App.view.datasource.DataSourceWin', {
            title: '新增数据源',
            actionType: 'I'
        });
        win.show(null, function () {
            win.down('#dataSourceName').focus();
        });
    },

    openUpdateDataSourceWin: function (btn) {
        var g = Ext.getCmp('dataSourceGrid');
        if (g.getSelection().length == 0) {
            Hzsun.Msg.warn('请选择一条记录');
            return;
        }
        if (g.getSelection().length > 1) {
            Hzsun.Msg.warn('只能选择一条记录');
            return;
        }
        var win = Ext.create('App.view.datasource.DataSourceWin', {
            title: '修改数据源',
            actionType: 'U'
        });
        win.show(null, function () {
            var rec = g.getSelection()[0];
            if (rec) {
                win.down('hzsunform').getForm().loadRecord(rec);
            }
            win.down('#dataSourceName').focus();
        });
    },

    saveDataSource: function (btn) {
        var win = btn.up('hzsunwin');
        var url = win.getActionType() === 'U' ? 'datasource/updateDataSource'
            : 'datasource/addDataSource';
        var form = win.down('hzsunform').getForm();
        if (form.isValid()) {
            Hzsun.Ajax.request({
                url: url,
                params: form.getValues(),
                maskTarget: win,
                success: function (obj) {
                    win.close();
                    Ext.getCmp('dataSourceGrid').getStore().reload();
                }
            });
        }
    },

    cancel: function (btn) {
        btn.up('hzsunwin').close();
    },

    deleteDataSource: function (btn) {
        var g = Ext.getCmp('datasourceGrid');
        if (g.getSelection().length == 0) {
            Hzsun.Msg.warn('请选择一条记录');
            return;
        }
        if (g.getSelection().length > 1) {
            Hzsun.Msg.warn('只能选择一条记录');
            return;
        }
        Hzsun.Msg.confirm('确认删除选中记录？', function () {
            Hzsun.Ajax.request({
                url: 'datasource/deleteDataSource',
                params: {
                    dataSourceId: g.getSelection()[0].get('dataSourceId')
                },
                success: function (obj) {
                    g.getStore().reload();
                }
            });
        });
    },

    testConnection: function (btn) {
        var form = btn.up('hzsunwin').down('hzsunform').getForm();
        if (form.isValid()) {
            Hzsun.Ajax.request({
                url: 'public/testConnection',
                params: form.getValues(),
                success: function () {
                    Hzsun.Msg.info('连接成功！');
                }
            });
        }
    },

    onItemContextMenu: function (g, record, item, index, e) {
        var menu = Ext.create('Ext.menu.Menu', {
            width: 100,
            floating: true,
            items: [{
                text: '新增',
                glyph: 0xf055,
                handler: this.openAddDataSourceWin
            }, {
                text: '修改',
                glyph: 0xf044,
                handler: this.openUpdateDataSourceWin
            }, {
                text: '删除',
                glyph: 0xf056,
                handler: this.deleteDataSource
            }]
        });
        e.stopEvent();
        menu.showAt(e.getXY());
        return false;
    }

});
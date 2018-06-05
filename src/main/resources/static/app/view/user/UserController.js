/*
 * 视图控制器 -用户管理
 */
Ext.define('App.view.user.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',

    init: function () {
    },

    clearUserPassword: function () {
        var records = Ext.getCmp('userGrid').getSelection();
        if (records.length == 0) {
            Hzsun.Msg.warn('请选择一条记录');
            return;
        }
        if (records.length > 1) {
            Hzsun.Msg.warn('只能选择一条记录');
            return;
        }

        var params = {};
        params.userId = records[0].data.userId;
        Hzsun.Msg.confirm('密码将被重置为888888，确认要清密吗？', function () {
            Hzsun.Ajax.request({
                url: 'user/clearPassword',
                params: params,
                success: function (obj) {
                    Hzsun.Msg.info('清密成功');
                    Ext.getCmp('userGrid').getStore().reload();
                }
            });
        });
    },

    openAddUserWin: function (btn) {
        var win = Ext.create('App.view.user.UserWin', {
            title: '新增用户',
            actionType: 'I'
        });
        win.show(null, function () {
            // win.down('treepicker').getStore().reload();
        });
        win.down('#userNum').focus();
    },

    openUpdateUserWin: function (btn) {
        var records = Ext.getCmp('userGrid').getSelection();
        if (records.length == 0) {
            Hzsun.Msg.warn('请选择一条记录');
            return;
        }
        if (records.length > 1) {
            Hzsun.Msg.warn('只能选择一条记录');
            return;
        }
        var win = Ext.create('App.view.user.UserWin', {
            title: '修改用户',
            actionType: 'U'
        });
        win.down('#userNum').setEditable(false);
        win.show(null, function () {
            win.down('treepicker').getStore().reload();
            win.down('hzsunform').loadRecord(records[0]);
            win.down('#userName').focus();
        });
    },

    saveUser: function (btn) {
        var win = btn.up('hzsunwin');
        var roleIdArr = ExtUtil.getGridSelectedArr(win.down('hzsungrid'), 'roleId');
        if (Ext.isEmpty(roleIdArr)) {
            Hzsun.Msg.warn('请选择用户角色');
            return;
        }

        var url = win.getActionType() === 'U' ? 'user/updateUser'
            : 'user/addUser';
        var form = win.down('hzsunform').getForm();
        var params = form.getValues();
        params.roleIdJson = Ext.encode(roleIdArr);
        if (form.isValid()) {
            Hzsun.Ajax.request({
                url: url,
                params: params,
                maskTarget: win,
                success: function (obj) {
                    btn.up('hzsunwin').close();
                    Ext.getCmp('userGrid').getStore().reload();
                }
            });
        }
    },

    cancel: function (btn) {
        btn.up('hzsunwin').close();
    },

    deleteUser: function (btn) {
        var g = Ext.getCmp('userGrid');
        if (g.getSelection().length == 0) {
            Hzsun.Msg.warn('请选择一条记录');
            return;
        }
        Hzsun.Msg.deleteConfirm(function () {
            Hzsun.Ajax.request({
                url: 'user/deleteUser',
                params: {
                    userId: g.getSelection()[0].get('userId')
                },
                success: function (obj) {
                    g.getStore().reload();
                }
            });
        });
    },

    onItemContextMenu: function (g, record, item, index, e) {
        var menu = Ext.create('Ext.menu.Menu', {
            width: 100,
            floating: true,
            items: [{
                text: '新增',
                glyph: 0xf055,
                handler: this.openAddUserWin
            }, {
                text: '修改',
                glyph: 0xf044,
                handler: this.openUpdateUserWin
            }, {
                text: '删除',
                glyph: 0xf056,
                handler: this.deleteUser
            }]
        });
        e.stopEvent();
        menu.showAt(e.getXY());
        return false;
    },

    onSelectionchange: function (r, selected, e) {
        var s = Ext.getCmp('userRoleGrid').getStore();
        s.getProxy().setExtraParams({
            userId: selected[0].get('userId')
        });
        s.load();
    }

});

/*
 * 视图模型 - 用户窗口管理
 */
Ext.define('App.view.user.UserWinModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userwin',
    requires: ['App.store.Dict', 'App.store.Role'],

    data: {},

    stores: {
        idTypeDict: {
            type: 'dict',
            autoLoad: true
        },
        role: {
            type: 'role',
            autoLoad: true,
            listeners: {
                load: function (store, records) {
                    if (!Ext.getCmp('userwin').down('hzsunform').down(
                            '#userId').getValue()) {
                        return;
                    }
                    var userId = Ext.getCmp('userGrid').getSelection()[0]
                        .get('userId');
                    Hzsun.Ajax.request({
                        url: 'user/queryUserRole',
                        params: {
                            userId: userId
                        },
                        success: function (obj) {
                            if (obj) {
                                var sm = Ext.getCmp('userwin').down('hzsungrid')
                                    .getSelectionModel();
                                for (var i = 0; i < obj.length; i++) {
                                    // 精准匹配
                                    var r = store.findRecord('roleId', obj[i].roleId, 0, false, false, true);
                                    sm.select(r, true);
                                }
                            }
                        }
                    });
                }
            }
        }
    }
});

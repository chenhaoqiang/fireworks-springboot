/*
 * 视图模型 - 用户管理
 */
Ext.define('App.view.user.UserModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.user',
	requires : [ 'App.store.page.User', 'App.store.UserRole', 'App.store.Dept' ],

	data : {},

	stores : {
		pageuser : {
			type : 'pageuser',
			autoLoad : true,
			listeners: {
				beforeload : function(s) {
					s.getProxy().setExtraParams({
                        userName : Ext.getCmp('userGrid').down('#userName').getValue()
					});
				}
			}
		},
		userrole : {
			type : 'userrole',
			autoLoad : false
		},
        deptTree : {
            type : 'dept',
            autoLoad : false
		}
	}
});

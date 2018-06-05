/*
 * 视图模型 - 角色管理
 */
Ext.define('App.view.role.RoleModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.role',
	requires : [ 'App.store.page.Role','App.store.Module' ],

	data : {},

	stores : {
		pagerole : {
			type : 'pagerole',
			autoLoad : true,
			listeners: {
				beforeload : function(s) {
					s.getProxy().setExtraParams({
						roleName : Ext.getCmp('roleGrid').down('#roleName').getValue()
					});
				}
			}
		},
		module : {
			type : 'module',
			autoLoad : true
		}
	}
});

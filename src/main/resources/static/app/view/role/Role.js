/*
 * 视图 - 角色管理
 */
Ext.define('App.view.role.Role', {
	extend : 'Hzsun.panel.Panel',
	xtype : 'role',
	title : '角色管理',
	layout : {
		type : 'hbox',
		align : 'stretch'
	},
	requires : [ 
        'App.view.role.RoleModel',
        'App.view.role.RoleController',
        'App.view.role.RoleGrid',
        'App.view.role.RoleModuleTree'
    ],
	viewModel : {
		type : 'role'
	},
	controller : 'role',
	
	items : [{
		xtype : 'rolegrid',
		flex : 7
	}, {
		xtype : 'rolemoduletree',
		flex : 3
	}],
	
	initComponent : function() {
		this.callParent(arguments);
	}
});
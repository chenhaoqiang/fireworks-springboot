/*
 * 视图 - 角色权限
 */
Ext.define('App.view.role.RoleModuleTree', {
	extend : 'Hzsun.tree.Panel',
	xtype : 'rolemoduletree',
	id : 'roleModuleTree',
	title : '角色权限列表',
	border : true,
	bind : {
		store : '{module}'
	},

	initComponent : function() {
		this.callParent(arguments);
	}
});
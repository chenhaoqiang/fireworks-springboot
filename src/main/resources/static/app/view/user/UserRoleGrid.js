/*
 * 视图 - 用户角色
 */
Ext.define('App.view.user.UserRoleGrid', {
	extend : 'Hzsun.grid.Panel',
	xtype : 'userrolegrid',
	id : 'userRoleGrid',
	title : '用户角色列表',
	border : true,
	selType : 'rowmodel',
	bind : {
		store : '{userrole}'
	},

	columns : [ {
		text : '角色编号',
		dataIndex : 'roleId',
		flex : 1
	}, {
		text : '角色名称',
		dataIndex : 'roleName',
		flex : 2
	}, {
		text : '备注',
		dataIndex : 'remark',
		flex : 2
	} ],
	
	initComponent : function() {
		this.callParent(arguments);
	}
});
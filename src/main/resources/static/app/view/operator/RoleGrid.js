/*
 * 视图 - 角色
 */
Ext.define('App.view.operator.RoleGrid', {
	extend : 'Hzsun.grid.Panel',
	xtype : 'optrolegrid',
	id : 'optRoleGrid',
	title : '操作员角色列表',
	height : comm.get("height") - 190,
	border : true,
	columnWidth : 0.3,
	selType : 'rowmodel',
	bind : {
		store : '{role}'
	},

	columns : [ {
		text : '角色编号',
		dataIndex : 'rolenum',
		flex : 1
	}, {
		text : '角色名称',
		dataIndex : 'rolename',
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
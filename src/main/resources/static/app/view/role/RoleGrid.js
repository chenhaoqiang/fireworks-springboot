/*
 * 视图 - 角色grid
 */
Ext.define('App.view.role.RoleGrid', {
	extend : 'Hzsun.ux.SimpleGrid',
	xtype : 'rolegrid',
	id : 'roleGrid',
	title : '角色列表',
	border : true,
	selType : 'rowmodel',
	bind : {
		store : '{pagerole}'
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
	
	functionButtons : [{
		text : '新增',
		glyph : 0xf055,
		moduleCode : '0010101',
		handler : 'addRole'
	}, {
		text : '修改',
		glyph : 0xf044,
		moduleCode : '0010102',
		handler : 'updateRole'
	}, {
		text : '删除',
		glyph : 0xf056,
		moduleCode : '0010103',
		handler : 'deleteRole'
	}],
	
	queryItems : [{
		xtype : 'hzsuntextfield',
		fieldLabel : '角色名称',
		itemId : 'roleName',
		labelWidth : 80
	}],
	
	bbar : {
		xtype : 'hzsunpagingtoolbar',
		bind : {
			store : '{pagerole}'
		}
	},
	
	listeners : {
		'itemcontextmenu' : 'onItemContextMenu',
		'selectionchange' : 'onSelectionchange'
	},
	
	initComponent : function() {
		this.callParent(arguments);
	}
});

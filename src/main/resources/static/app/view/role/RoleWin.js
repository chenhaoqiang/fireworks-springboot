/*
 * 视图 - 角色新增/修改窗口
 */
Ext.define("App.view.role.RoleWin", {
	extend: "Hzsun.window.Window",
	xtype: "rolewin",
	width : 500,
	height : 400,
	id : 'roleWin',
	
	requires: ["App.view.role.RoleWinModel", "App.view.role.RoleController"],
	viewModel: {
		type: "rolewin"
	},
	controller: "role",
	layout : 'column',
	
	items:[{
		xtype:'hzsunform',
		columnWidth : 0.5,
		items : [{
			xtype : 'hidden',
			name : 'rolenum',
			itemId : 'rolenum'
		}, {
			xtype : 'hzsuntextfield',
			name : 'rolename',
			itemId : 'rolename',
			fieldLabel : '角色名称',
			allowBlank : false
		}, {
			xtype : 'hzsuntextfield',
			name : 'remark',
			fieldLabel : '备注'
		}]
	}, {
		xtype:'hzsuntreepanel',
		title : '角色权限列表',
		border : true,
		columnWidth : 0.48,
		height : 320,
		selModel : 'treemodel',
		bind : {
			store : '{checkboxmodule}'
		}
	}],
	buttons : [{
		text : '保存',
		handler : 'saveRole'
	},{
		text : '取消',
		handler : 'cancel'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
});
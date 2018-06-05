/*
 * 视图 - 操作员新增/修改窗口
 */
Ext.define("App.view.operator.OperatorWin", {
	extend: "Hzsun.window.Window",
	xtype: "operatorwin",
	width : 700,
	height : 320,
	id : 'operatorwin',
	
	requires: ["App.view.operator.OperatorWinModel", "App.view.operator.OperatorController"],
	viewModel: {
		type: "operatorwin"
	},
	controller: "operator",
	layout : 'column',
	
	items:[{
		xtype:'hzsunform',
		columnWidth : 0.5,
		items : [{
			xtype : 'hidden',
			name : 'optnum',
			itemId : 'optnum'
		}, {
			xtype : 'hzsuntextfield',
			name : 'optname',
			itemId : 'optname',
			fieldLabel : '操作员名称',
			allowBlank : false
		}, {
			xtype : 'hzsuncombo',
			name : 'idtype',
			fieldLabel : '证件类型',
			bind : {
				store : '{idTypeDict}'
			},
		    displayField: 'dictname',
		    valueField: 'dictnum'
		}, {
			xtype : 'hzsuntextfield',
			name : 'idno',
			fieldLabel : '证件号码'
		}, {
			xtype : 'hzsuntextfield',
			name : 'phoneno',
			fieldLabel : '手机号码'
		}, {
			xtype : 'hzsuntextfield',
			name : 'email',
			fieldLabel : '邮箱'
		}, {
			xtype : 'hzsuntextfield',
			name : 'remark',
			fieldLabel : '备注'
		}]
	}, {
		xtype:'hzsungrid',
		title : '操作员角色列表',
		border : true,
		columnWidth : 0.48,
		height : 240,
		selType : 'checkboxmodel',
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
		} ],
	}],
	
	buttons : [{
		text : '保存',
		handler : 'saveOperator'
	},{
		text : '取消',
		handler : 'cancel'
	}],
	
	initComponent: function() {
		this.getViewModel().getStore('idTypeDict').getProxy().setExtraParams({
			typeNum : comm.get('dictType').IDTYPE
		});
		this.callParent(arguments);
	}
});

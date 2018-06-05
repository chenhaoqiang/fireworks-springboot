Ext.define('App.view.module.ModuleWin', {
	extend: 'Hzsun.window.Window',
	xtype: 'modulewin',
	width : 400,
	height : 300,
	id : 'moduleWin',
	
	requires: ['App.view.module.ModuleController'],
	viewModel: {
		type: 'modulewin'
	},
	controller: 'module',
	
	items:[{
		xtype:'hzsunform',
		items : [{
			xtype : 'hzsuntextfield',
			name : 'moduleCode',
			itemId : 'moduleCode',
			fieldLabel : '模块编号',
			allowBlank : false
		},{
			xtype : 'hzsuntextfield',
			itemId : 'parentCode',
			name : 'parentCode',
			fieldLabel : '父模块编号'
		},{
			xtype : 'hzsuntextfield',
			name : 'moduleName',
			fieldLabel : '模块名称',
			allowBlank : false
		},{
			xtype : 'hzsunnumberfield',
			name : 'sortId',
			fieldLabel : '排序',
			allowBlank : false
		},{
			xtype : 'hzsuntextfield',
			name : 'remark',
			fieldLabel : '备注'
		},{
			xtype : 'hzsuntextfield',
			name : 'moduleTag',
			fieldLabel : '标签',
			allowBlank : false
		}]
	}],
	buttons : [{
		text : '保存',
		handler : 'saveModule'
	},{
		text : '取消',
		handler : 'cancel'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
});
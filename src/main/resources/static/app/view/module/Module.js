Ext.define('App.view.module.Module', {
	extend : 'Hzsun.ux.SimpleGrid',
	xtype : 'module',
	title : '功能模块',
	id : 'moduleGrid',
	selType : 'rowmodel',
	requires : [ 'App.view.module.ModuleModel', 'App.view.module.ModuleController' ],
	viewModel : {
		type : 'module'
	},
	controller : 'module',
	border : true,
	layout : {
		type : 'hbox',
		align : 'stretch'
	},

	bind : {
		store : '{pagemodule}'
	},

	columns : [ {
		text : '模块编号',
		dataIndex : 'moduleCode',
		width : 120
	}, {
		text : '父模块编号',
		dataIndex : 'parentCode',
		width : 120
	}, {
		text : '模块名称',
		dataIndex : 'moduleName',
		width : 150
	}, {
		text : '排序',
		dataIndex : 'sortId',
		width : 80
	}, {
		text : '备注',
		dataIndex : 'remark',
		width : 150
	}, {
		text : '标签',
		dataIndex : 'moduleTag',
		width : 120
	} ],

	functionButtons : [ {
		text : '新增',
		glyph : 0xf055,
		moduleCode : '0010301',
		handler : 'openAddModuleWin'
	}, {
		text : '修改',
		glyph : 0xf044,
		moduleCode : '0010302',
		handler : 'openUpdateModuleWin'
	}, {
		text : '删除',
		glyph : 0xf056,
		moduleCode : '0010303',
		handler : 'deleteModule'
	} ],

	queryItems : [ {
		xtype : 'hzsuntextfield',
		fieldLabel : '模块编号',
		name : 'moduleCode'
	}, {
		xtype : 'hzsuntextfield',
		fieldLabel : '模块名称',
		name : 'moduleName'
	} ],

	bbar : {
		xtype : 'hzsunpagingtoolbar',
		bind : {
			store : '{pagemodule}'
		}
	},

	listeners : {
		'itemcontextmenu' : 'onItemContextMenu'
	},

	initComponent : function() {
		this.callParent(arguments);
	}

});
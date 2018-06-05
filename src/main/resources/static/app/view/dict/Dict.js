Ext.define('App.view.dict.Dict', {
	extend : 'Hzsun.ux.SimpleGrid',
	xtype : 'dict',
	title : '数据字典',
	id : 'dictGrid',
	selType : 'rowmodel',
	requires : [ 'App.view.dict.DictModel', 'App.view.dict.DictController' ],
	viewModel : {
		type : 'dict'
	},
	controller : 'dict',
	border : true,
	layout : {
		type : 'hbox',
		align : 'stretch'
	},

	bind : {
		store : '{pagedict}'
	},

	columns : [ {
   		text : '字典类型名称',
   		dataIndex : 'typeName',
   		width : 120
   	}, {
   		text : '字典编号',
   		dataIndex : 'dictNum',
   		width : 100
   	}, {
   		text : '字典代码',
   		dataIndex : 'dictCode',
   		width : 100
   	}, {
   		text : '字典名称',
   		dataIndex : 'dictName',
   		width : 100
   	}, {
   		text : '父类字典编号',
   		dataIndex : 'parentDictNum',
   		width : 100
   	}, {
   		text : '备注',
   		dataIndex : 'remark',
   		width : 200
   	} ],

	functionButtons : [ {
		text : '新增',
		glyph : 0xf055,
		moduleCode : '0010401',
		handler : 'openAddDictWin'
	}, {
		text : '修改',
		glyph : 0xf044,
		moduleCode : '0010402',
		handler : 'openUpdateDictWin'
	}, {
		text : '删除',
		glyph : 0xf056,
		moduleCode : '0010403',
		handler : 'deleteDict'
	} ],

	queryItems : [ {
		xtype : 'hzsuncombo',
		name : 'typeNum',
		fieldLabel : '字典类别',
		bind : {
			store : '{dicttype}'
		},
	    displayField: 'typeName',
	    valueField: 'typeNum'
	} ],

	bbar : {
		xtype : 'hzsunpagingtoolbar',
		bind : {
			store : '{pagedict}'
		}
	},

	listeners : {
		'itemcontextmenu' : 'onItemContextMenu'
	},

	initComponent : function() {
		this.callParent(arguments);
	}

});
/*
 * 视图 - 操作员grid
 */
Ext.define('App.view.operator.OperatorGrid', {
	extend : 'Hzsun.ux.SimpleGrid',
	xtype : 'operatorgrid',
	id : 'operatorGrid',
	title : '操作员列表',
	height : comm.get("height") - 190,
	border : true,
	columnWidth : 0.7,
	selType : 'rowmodel',
	bind : {
		store : '{pageoperator}'
	},

	columns : [ {
		text : '操作员编号',
		dataIndex : 'optnum',
		flex : 1
	}, {
		text : '操作员名称',
		dataIndex : 'optname',
		flex : 2
	}, {
		text : '证件类型',
		dataIndex : 'idtypename',
		flex : 1
	}, {
		text : '证件号码',
		dataIndex : 'idno',
		flex : 2
	}, {
		text : '手机号码',
		dataIndex : 'phoneno',
		flex : 2
	}, {
		text : '邮箱',
		dataIndex : 'email',
		flex : 2
	}, {
		text : '备注',
		dataIndex : 'remark',
		flex : 2
	} ],
	
	functionButtons : [{
		text : '新增',
		glyph : 0xf055,
		moduleCode : '0010201',
		handler : 'addOperator'
	}, {
		text : '修改',
		glyph : 0xf044,
		moduleCode : '0010202',
		handler : 'updateOperator'
	}, {
		text : '删除',
		glyph : 0xf056,
		moduleCode : '0010203',
		handler : 'deleteOperator'
	}],
	
	queryItems : [{
		xtype : 'hzsuntextfield',
		fieldLabel : '操作员名称',
		itemId : 'optName',
		labelWidth : 80
	}],
	
	bbar : {
		xtype : 'hzsunpagingtoolbar',
		bind : {
			store : '{pageoperator}'
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

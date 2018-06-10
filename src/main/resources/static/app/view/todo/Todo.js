/*
 * 视图 - 我的待办
 */
Ext.define('App.view.todo.Todo', {
	extend : 'Hzsun.ux.SimpleGrid',
	xtype : 'todo',
	title : '我的待办',
	id : 'todoGrid',
	selType : 'rowmodel',
	requires : [ 'App.view.todo.TodoModel', 'App.view.todo.TodoController' ],
	viewModel : {
		type : 'todo'
	},
	controller : 'todo',
	border : true,
	layout : {
		type : 'hbox',
		align : 'stretch'
	},

	bind : {
		store : '{pagetodo}'
	},

	columns : [ {
		text : '待办编号',
		dataIndex : 'todoNum',
		width : 80
	}, {
		text : '待办分类',
		dataIndex : 'todoTypeName',
		width : 80
	}, {
		text : '待办内容',
		dataIndex : 'content',
		width : 600
	}, {
		text : '状态',
		dataIndex : 'status',
		renderer : function(value, meta, record) {
			if (value == 0) {
				meta.style = 'color:red;';
				return '未完成';
			} else if (value == 1) {
				meta.style = 'color:green;';
				return '已完成';
			}
			return '未知';
		},
		width : 60
	}, {
		text : '完成说明',
		dataIndex : 'completeRemark',
		width : 200
	}, {
		text : '完成时间',
		dataIndex : 'completeTime',
		width : 160
	}, {
		text : '完成者',
		dataIndex : 'completeUserName',
		width : 120
	}, {
		text : '创建时间',
		dataIndex : 'createTime',
		width : 160
	}, {
		text : '创建者',
		dataIndex : 'createUserName',
		width : 120
	} ],

	functionButtons : [ {
		text : '新增',
		glyph : 0xf055,
		moduleCode : '0020101',
		handler : 'openAddTodoWin'
	}, {
		text : '修改',
		glyph : 0xf044,
		moduleCode : '0020102',
		handler : 'openUpdateTodoWin'
	}, {
		text : '删除',
		glyph : 0xf056,
		moduleCode : '0020103',
		handler : 'deleteTodo'
	}, {
		text : '完成',
		glyph : 0xf046,
		moduleCode : '0020104',
		handler : 'openCompleteTodoWin'
	} ],

	queryItems : [ {
		xtype : 'hzsundatefield',
		name : 'createDate',
		fieldLabel : '创建日期'
	}, {
		xtype : 'hzsundatefield',
		name : 'completeDate',
		fieldLabel : '完成日期'
	}, {
		xtype : 'hzsuncombo',
		name : 'todoType',
		fieldLabel : '待办分类',
		bind : {
			store : '{todoTypeDict}'
		},
	    displayField: 'dictName',
	    valueField: 'dictNum',
	    value: 1
	}, {
		xtype : 'hzsuncombo',
		name : 'status',
		fieldLabel : '待办状态',
		bind : {
			store : '{todoStatusDict}'
		},
	    displayField: 'dictName',
	    valueField: 'dictNum',
	    value : '0'
	} ],

	bbar : {
		xtype : 'hzsunpagingtoolbar',
		bind : {
			store : '{pagetodo}'
		}
	},

	listeners : {
		'itemcontextmenu' : 'onItemContextMenu'
	},

	initComponent : function() {
		this.getViewModel().getStore('todoStatusDict').getProxy().setExtraParams({
			typeNum : comm.get('dictType').TODO_STATUS
		});
		this.getViewModel().getStore('todoTypeDict').getProxy().setExtraParams({
			typeNum : comm.get('dictType').TODO_TYPE
		});
		this.callParent(arguments);
	}

});
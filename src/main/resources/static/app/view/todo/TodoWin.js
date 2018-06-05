/*
 * 视图 - 任务新增/修改窗口
 */
Ext.define("App.view.todo.TodoWin", {
	extend: "Hzsun.window.Window",
	xtype: "todowin",
	width : 500,
	height : 450,
	id : 'todoWin',
	
	requires: ["App.view.todo.TodoWinModel", "App.view.todo.TodoController"],
	viewModel: {
		type: "todowin"
	},
	controller: "todo",
	
	items:[{
		xtype:'hzsunform',
		items : [ {
			xtype : 'hidden',
			name : 'todoNum',
			itemId : 'todoNum'
		}, {
			xtype : 'hzsuncombo',
			name : 'todoType',
			itemId : 'todoTypeCombo',
			fieldLabel : '任务类型',
			bind : {
				store : '{todoTypeDict}'
			},
		    displayField: 'dictName',
		    valueField: 'dictNum',
		    allowBlank : false
		}, {
			xtype : 'hzsuntextarea',
			name : 'content',
			itemId : 'content',
			fieldLabel : '任务内容',
			height : 300,
			allowBlank : false
		}]
	}],
	buttons : [{
		text : '保存',
		handler : 'saveTodo'
	},{
		text : '取消',
		handler : 'cancel'
	}],
	
	initComponent: function() {
		this.getViewModel().getStore('todoTypeDict').getProxy().setExtraParams({
			typeNum : comm.get('dictType').TODO_TYPE
		});
		this.callParent(arguments);
	}
});
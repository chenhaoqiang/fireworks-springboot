/*
 * 视图 - 任务完成窗口
 */
Ext.define('App.view.todo.CompleteTodoWin', {
	extend: 'Hzsun.window.Window',
	xtype: 'completetodowin',
	width : 500,
	height : 500,
	id : 'completeTodoWin',
	
	requires: ['App.view.todo.TodoController'],
	controller: 'todo',
	
	items:[{
		xtype:'hzsunform',
		items : [ {
			xtype : 'hzsuntextarea',
			itemId : 'content',
			fieldLabel : '任务内容',
			height : 200,
			editable : false
		}, {
			xtype : 'hzsuntextarea',
			name : 'completeRemark',
			itemId : 'completeRemark',
			fieldLabel : '完成说明',
			height : 180,
			allowBlank : false
		}]
	}],
	buttons : [{
		text : '确定',
		handler : 'completeTodo'
	},{
		text : '取消',
		handler : 'cancel'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
});
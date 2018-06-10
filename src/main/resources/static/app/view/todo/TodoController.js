/*
 * 视图控制器 -我的待办
 */
Ext.define('App.view.todo.TodoController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.todo',

	init : function() {
	},

	openAddTodoWin : function(btn) {
		var win = Ext.create('App.view.todo.TodoWin', {
			title : '新增待办'
		});
		win.show(null, function() {
			win.down('#todoTypeCombo').setValue(1);
			win.down('#content').focus();
		});
	},

	openUpdateTodoWin : function(btn) {
		var g = Ext.getCmp('todoGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		if (g.getSelection().length > 1) {
			Hzsun.Msg.warn('只能选择一条记录');
			return;
		}
		var win = Ext.create('App.view.todo.TodoWin', {
			title : '修改待办'
		});
		win.show(null, function() {
			Hzsun.Ajax.request({
				url : 'todo/queryTodo',
				params : {
					todoNum : g.getSelection()[0].get('todoNum')
				},
				success : function(obj) {
					win.down('hzsunform').getForm().setValues(obj[0]);
					win.down('#content').focus();
				}
			});
		});
	},

	saveTodo : function(btn) {
		var win = btn.up('hzsunwin');
		var url = win.down('#todoNum').getValue() ? 'todo/updateTodo'
				: 'todo/addTodo';
		var form = win.down('hzsunform').getForm();
		if (form.isValid()) {
			Hzsun.Ajax.request({
				url : url,
				params : form.getValues(),
				maskTarget : win,
				success : function(obj) {
					win.close();
					Ext.getCmp('todoGrid').getStore().reload();
				}
			});
		}
	},

	cancel : function(btn) {
		btn.up('hzsunwin').close();
	},

	deleteTodo : function(btn) {
		var g = Ext.getCmp('todoGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		Hzsun.Msg.confirm('确认删除选中记录？', function() {
			Hzsun.Ajax.request({
				url : 'todo/deleteTodo',
				params : {
					todoNum : g.getSelection()[0].get('todoNum')
				},
				success : function(obj) {
					Hzsun.Msg.info('删除成功');
					g.getStore().reload();
				}
			});
		});
	},
	
	openCompleteTodoWin : function(btn) {
		var g = Ext.getCmp('todoGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		
		var win = Ext.create('App.view.todo.CompleteTodoWin', {
			title : '完成待办'
		});
		win.show(null, function() {
			win.down('#content').setValue(g.getSelection()[0].get('content'));
			win.down('#completeRemark').focus();
		});
	},
	
	completeTodo : function(btn) {
		var win = btn.up('hzsunwin');
		var form = win.down('hzsunform').getForm();
		if (form.isValid()) {
			var params = form.getValues();
			params.todoNum = Ext.getCmp('todoGrid').getSelection()[0].get('todoNum');
			Hzsun.Ajax.request({
				url : 'todo/completeTodo',
				params : params,
				maskTarget : win,
				success : function(obj) {
					win.close();
					Ext.getCmp('todoGrid').getStore().reload();
				}
			});
		}
	},

	onItemContextMenu : function(g, record, item, index, e) {
		var menu = Ext.create('Ext.menu.Menu', {
			width : 100,
			floating : true,
			items : [ {
				text : '新增',
				glyph : 0xf055,
				handler : this.openAddTodoWin
			}, {
				text : '修改',
				glyph : 0xf044,
				handler : this.openUpdateTodoWin
			}, {
				text : '删除',
				glyph : 0xf056,
				handler : this.deleteTodo
			}, {
				text : '完成',
				glyph : 0xf046,
				handler : this.openCompleteTodoWin
			} ]
		});
		e.stopEvent();
		menu.showAt(e.getXY());
		return false;
	}

});
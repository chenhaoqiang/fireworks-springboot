/*
 * 视图模型 - 我的待办
 */
Ext.define('App.view.todo.TodoModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.todo',
	requires : [ 'App.store.page.Todo', 'App.store.Dict' ],

	data : {},

	stores : {
		pagetodo : {
			type : 'pagetodo',
			autoLoad : true,
			listeners: {
				beforeload : function(s) {
					s.getProxy().setExtraParams(Ext.getCmp('todoGrid').down('hzsunform').getValues());
				}
			}
		},
		todoStatusDict : {
			type : 'dict',
			autoLoad : true,
			listeners: {
				load : function(s) {
					s.removeAt(0);
				}
			}
		},
		todoTypeDict : {
			type : 'dict',
			autoLoad : true,
			listeners: {
				load : function(s) {
					// s.removeAt(0);
				}
			}
		}
	}
});

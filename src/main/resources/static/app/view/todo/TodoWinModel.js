/*
 * 视图模型 - 我的任务窗口
 */
Ext.define('App.view.todo.TodoWinModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.todowin',
	requires : [ 'App.store.Dict'],

	data : {},

	stores : {
		todoTypeDict : {
			type : 'dict',
			autoLoad : true
		}
	}
});

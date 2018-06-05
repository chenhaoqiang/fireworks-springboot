/* 
 * 视图模型 - 系统主页
 */

Ext.define("App.view.main.MainModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.main",
	
	data: {
		welcomeDesc : "<i class='icon-user'></i> 欢迎您，" + comm.get('platformSession').userName
	},
	stores: []
});
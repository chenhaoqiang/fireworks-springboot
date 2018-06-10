/* 
 * 数据存储 - 我的待办
 */
Ext.define("App.store.page.Todo", {
	extend: "Hzsun.data.Store",
	alias: "store.pagetodo",
	model: "App.model.Todo",
	proxy: {
		type : "hzsunajax",
		url: "todo/queryTodoByPage"
	}
});
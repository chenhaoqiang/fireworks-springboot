/* 
 * 数据存储 - 用户
 */
Ext.define("App.store.page.User", {
	extend: "Hzsun.data.Store",
	alias: "store.pageuser",
	model: "App.model.User",
	proxy: {
		type : "hzsunajax",
		url: "user/queryUserByPage"
	}
});

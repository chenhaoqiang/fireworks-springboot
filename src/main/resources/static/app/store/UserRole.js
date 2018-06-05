/* 
 * 数据存储 - 用户角色
 */
Ext.define("App.store.UserRole", {
	extend: "Hzsun.data.Store",
	alias: "store.userrole",
	model: "App.model.Role",
	proxy: {
		type : "hzsunajax",
		url: "user/queryUserRole"
	}
});
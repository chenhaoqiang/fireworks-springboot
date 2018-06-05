/* 
 * 数据存储 - 角色
 */
Ext.define("App.store.Role", {
	extend: "Hzsun.data.Store",
	alias: "store.role",
	model: "App.model.Role",
	proxy: {
		type : "hzsunajax",
		url: "role/queryRole"
	}
});
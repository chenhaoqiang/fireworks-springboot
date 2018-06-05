/* 
 * 数据存储 - 角色
 */
Ext.define("App.store.page.Role", {
	extend: "Hzsun.data.Store",
	alias: "store.pagerole",
	model: "App.model.Role",
	proxy: {
		type : "hzsunajax",
		url: "role/queryRoleByPage"
	}
});
/* 
 * 数据存储 - 权限
 */
Ext.define("App.store.Module", {
	extend : "Hzsun.data.TreeStore",
	alias : "store.module",
	proxy : {
		type : "hzsunajax",
		url : "module/queryModuleTree",
		reader : {
			type : "json",
			rootProperty : "children"
		}
	},
	rootVisible : false,
	root : {
		text : '角色权限列表'
	}
});
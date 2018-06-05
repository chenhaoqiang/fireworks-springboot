/* 
 * 数据存储 - 权限
 */
Ext.define("App.store.CheckBoxModule", {
	extend : "Hzsun.data.TreeStore",
	alias : "store.checkboxmodule",
	proxy : {
		type : "hzsunajax",
		url : "module/queryModuleTreeWithCheckBox",
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
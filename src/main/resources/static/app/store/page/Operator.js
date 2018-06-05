/* 
 * 数据存储 - 操作员
 */
Ext.define("App.store.page.Operator", {
	extend: "Hzsun.data.Store",
	alias: "store.pageoperator",
	model: "App.model.Operator",
	proxy: {
		type : "hzsunajax",
		url: "operator/queryOperatorByPage"
	}
});

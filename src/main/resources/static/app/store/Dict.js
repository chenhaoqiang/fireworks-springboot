/* 
 * 数据存储 - 数据字典
 */
Ext.define("App.store.Dict", {
	extend: "Hzsun.data.Store",
	alias: "store.dict",
	model: "App.model.Dict",
	proxy: {
		type : "hzsunajax",
		url: "dict/queryDict"
	}
});

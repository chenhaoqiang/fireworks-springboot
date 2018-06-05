Ext.define("App.store.DictType", {
	extend: "Hzsun.data.Store",
	alias: "store.dicttype",
	model: "App.model.DictType",
	proxy: {
		type : "hzsunajax",
		url: "dict/queryDictType"
	}
});

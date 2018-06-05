Ext.define("App.store.page.Dict", {
	extend: "Hzsun.data.Store",
	alias: "store.pagedict",
	model: "App.model.Dict",
	proxy: {
		type : "hzsunajax",
		url: "dict/queryDictByPage"
	}
});
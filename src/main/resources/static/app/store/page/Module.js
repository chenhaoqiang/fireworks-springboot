Ext.define("App.store.page.Module", {
	extend: "Hzsun.data.Store",
	alias: "store.pagemodule",
	model: "App.model.Module",
	proxy: {
		type : "hzsunajax",
		url: "module/queryModuleByPage"
	}
});
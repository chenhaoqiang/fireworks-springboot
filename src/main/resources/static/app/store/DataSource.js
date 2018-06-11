Ext.define("App.store.DataSource", {
	extend: "Hzsun.data.Store",
	alias: "store.datasource",
	model: "App.model.DataSource",
	proxy: {
		type : "hzsunajax",
		url: "datasource/queryDataSource"
	}
});
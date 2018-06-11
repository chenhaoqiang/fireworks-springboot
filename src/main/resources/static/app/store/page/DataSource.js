Ext.define("App.store.page.DataSource", {
	extend: "Hzsun.data.Store",
	alias: "store.pagedatasource",
	model: "App.model.DataSource",
	proxy: {
		type : "hzsunajax",
		url: "datasource/queryDataSourceByPage"
	}
});
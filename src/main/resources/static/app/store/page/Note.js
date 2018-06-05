Ext.define("App.store.page.Note", {
	extend: "Hzsun.data.Store",
	alias: "store.pagenote",
	model: "App.model.Note",
	proxy: {
		type : "hzsunajax",
		url: "note/queryNoteByPage"
	}
});
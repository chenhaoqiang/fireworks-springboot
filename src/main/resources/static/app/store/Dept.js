Ext.define("App.store.Dept", {
	extend: "Hzsun.data.TreeStore",
	alias: "store.dept",
	proxy: {
		type : "hzsunajax",
		url: "dept/queryDept"
	},
    rootVisible : false,
    root : {
        text : '组织机构列表'
    }
});
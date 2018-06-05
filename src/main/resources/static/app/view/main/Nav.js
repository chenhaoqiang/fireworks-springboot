/*
 * 导航菜单
 */
Ext.define("App.view.main.Nav", {
	extend : "Hzsun.tree.Panel",
	xtype : "nav",
	id : "nav",

	initComponent : function() {
		// 导航菜单Store
		var navStore = Ext.create("Hzsun.data.TreeStore", {
			proxy : {
				type : "hzsunajax",
				url : "module/queryModuleMenu",
				reader : {
					type : "json",
					rootProperty : "children"
				}
			},
			rootVisible : false,
			root : {
				text : '导航菜单',
				expanded : true
			}
		});

		Ext.apply(this, {
			title : "导航菜单",
			collapsible : true,
			// split: true,
			autoScroll : true,
			margin : "0 5 0 5",
			width : 225,
			border : true,
			rootVisible : false,
			store : navStore,
			listeners : {
				itemclick : "onMenuClick"
			}
		});
		this.callParent(arguments);
	}
});

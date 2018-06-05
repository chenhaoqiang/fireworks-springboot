/*
 * 主题内容
 */
Ext.define("App.view.main.Content", {
	extend : "Ext.tab.Panel",
	xtype : "content",
	id : "mainContent",
	uses : [ "App.view.desktop.Desktop" ],
	
	initComponent : function() {
		Ext.apply(this, {
			border : false,
			margin : "0 5 0 0",
			layout : "fit",
			items : [ {
				xtype : "desktop",
				itemId : "desktop",
				closable : false
			} ]
		});
		this.callParent(arguments);
	}
});

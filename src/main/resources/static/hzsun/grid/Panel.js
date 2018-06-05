Ext.define("Hzsun.grid.Panel", {
	extend : "Ext.grid.Panel",
	xtype : "hzsungrid",
	border : false,
	selModel : {
		selType : 'checkboxmodel',
		mode : 'MULTI'
	},
	viewConfig : {
		enableTextSelection : true
	},

	initComponent : function() {
		this.callParent(arguments);
	}
});
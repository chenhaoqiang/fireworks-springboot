Ext.define("Hzsun.window.Window", {
	extend: "Ext.window.Window",
	xtype: "hzsunwin",
	width : 400,
	height : 400,
	modal : true,
	resizable : false,
	buttonAlign : 'center',
	layout : 'fit',
	config : {
		actionType : undefined
	},
	
	initComponent: function() {
		this.callParent(arguments);
	}
});
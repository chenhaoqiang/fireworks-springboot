Ext.define("Hzsun.button.Button", {
	extend: "Ext.button.Button",
	xtype: "hzsunbutton",
	moduleCode : undefined,
	
	initComponent: function() {
		if(this.moduleCode && !ExtUtil.hasPermission(this.moduleCode)) {
			this.setHidden(true);
		}
		this.callParent(arguments);
	}
});
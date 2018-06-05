Ext.define("Hzsun.form.Panel", {
	extend: "Ext.form.Panel",
	xtype: "hzsunform",
	border: false,
	buttonAlign:'center',
	bodyPadding: 5,
	layout: 'anchor',
	defaultType:'hzsuntextfield',
    defaults: {
        anchor: '100%'
    },
	fieldDefaults: {
        labelAlign: 'right',
        margin : '10 15 0 0'
    },
	
	initComponent: function() {
		this.callParent(arguments);
	}
});
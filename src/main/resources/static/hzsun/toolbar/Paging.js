Ext.define("Hzsun.toolbar.Paging", {
	extend : "Ext.toolbar.Paging",
	xtype : "hzsunpagingtoolbar",
	displayInfo : true,

    getCustomItems : function () {
        var pageSizeStore = Ext.create('Ext.data.Store', {
            fields: ['pageSize'],
            data : [
                {"pageSize":"20"},
                {"pageSize":"50"},
                {"pageSize":"100"},
                {"pageSize":"200"},
                {"pageSize":"500"},
                {"pageSize":"1000"}
            ]
        });

        var customCombo = Ext.create('Ext.form.field.ComboBox', {
        	itemId : 'customComboId',
            store: pageSizeStore,
            queryMode: 'local',
            displayField: 'pageSize',
            valueField: 'pageSize',
            editable : false,
			width : 70,
			value : 20,
			listeners : {
            	select : function (combo) {
                    combo.ownerCt.getStore().pageSize = parseInt(combo.getValue());
                    combo.ownerCt.moveFirst();
                }
			}
        });

        return ['-', '每页', customCombo, '条']
    },

    initComponent: function() {
		var me = this;
		Ext.apply(me, {
			items : me.getCustomItems()
		});
        this.callParent(arguments);
    }
});
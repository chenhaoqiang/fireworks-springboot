Ext.define('App.view.module.ModuleModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.module',
	requires : [ 'App.store.page.Module' ],

	data : {},

	stores : {
		pagemodule : {
			type : 'pagemodule',
			autoLoad : true,
			listeners: {
				beforeload : function(s) {
					s.getProxy().setExtraParams(Ext.getCmp('moduleGrid').down('hzsunform').getValues());
				}
			}
		}
	}
});

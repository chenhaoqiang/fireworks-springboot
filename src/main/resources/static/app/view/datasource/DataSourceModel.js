Ext.define('App.view.datasource.DataSourceModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.datasource',
	requires : [ 'App.store.page.DataSource'],

	data : {},

	stores : {
		pagedatasource : {
			type : 'pagedatasource',
			autoLoad : true,
			listeners: {
				beforeload : function(s) {
					s.getProxy().setExtraParams(Ext.getCmp('dataSourceGrid').down('hzsunform').getValues());
				}
			}
		}
	}
});

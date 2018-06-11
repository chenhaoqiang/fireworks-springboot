Ext.define('App.view.datasource.DataSourceWinModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.datasourcewin',
	requires : [ 'App.store.DataSourceType' ],

	data : {},

	stores : {
		datasourcetype : {
			type : 'datasourcetype',
			autoLoad : true
		}
	}
});

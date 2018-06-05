Ext.define('App.view.dict.DictWinModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.dictwin',
	requires : [ 'App.store.DictType' ],

	data : {},

	stores : {
		dicttype : {
			type : 'dicttype',
			autoLoad : true
		}
	}
});

Ext.define('App.view.dict.DictModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.dict',
	requires : [ 'App.store.page.Dict', 'App.store.DictType' ],

	data : {},

	stores : {
		pagedict : {
			type : 'pagedict',
			autoLoad : true,
			listeners: {
				beforeload : function(s) {
					s.getProxy().setExtraParams(Ext.getCmp('dictGrid').down('hzsunform').getValues());
				}
			}
		},
		dicttype : {
			type : 'dicttype'
		}
	}
});

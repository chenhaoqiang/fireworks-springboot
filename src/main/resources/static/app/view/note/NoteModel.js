Ext.define('App.view.note.NoteModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.note',
	requires : [ 'App.store.page.Note', 'App.store.Dict' ],

	data : {},

	stores : {
		pagenote : {
			type : 'pagenote',
			autoLoad : true,
			listeners: {
				beforeload : function(s) {
					s.getProxy().setExtraParams(Ext.getCmp('noteGrid').down('hzsunform').getValues());
				}
			}
		},
		noteTypeDict : {
			type : 'dict',
			autoLoad : true,
			listeners: {
				load : function(s) {
					// s.removeAt(0);
				}
			}
		}
	}
});

Ext.define('App.view.note.NoteWinModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.notewin',
	requires : [ 'App.store.Dict'],

	data : {},

	stores : {
		noteTypeDict : {
			type : 'dict',
			autoLoad : true
		}
	}
});

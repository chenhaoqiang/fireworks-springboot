Ext.define('App.view.note.NoteController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.note',

	init : function() {
	},

	openAddNoteWin : function(btn) {
		var win = Ext.create('App.view.note.NoteWin', {
			title : '新增笔记',
			actionType : 'I'
		});
		win.show(null, function() {
			win.down('#noteName').focus();
		});
	},

	openUpdateNoteWin : function(btn) {
		var g = Ext.getCmp('noteGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		if (g.getSelection().length > 1) {
			Hzsun.Msg.warn('只能选择一条记录');
			return;
		}
		var win = Ext.create('App.view.note.NoteWin', {
			title : '修改笔记',
			actionType : 'U'
		});
		win.show(null, function() {
			var rec = g.getSelection()[0];
	        if (rec) {
	        	win.down('hzsunform').getForm().loadRecord(rec);
	        }
        	win.down('#noteName').focus();
		});
	},

	saveNote : function(btn) {
		var win = btn.up('hzsunwin');
		var url = win.getActionType() === 'U' ? 'note/updateNote'
				: 'note/addNote';
		var form = win.down('hzsunform').getForm();
		if (form.isValid()) {
			Hzsun.Ajax.request({
				url : url,
				params : form.getValues(),
				maskTarget : win,
				success : function(obj) {
					win.close();
					Ext.getCmp('noteGrid').getStore().reload();
				}
			});
		}
	},

	cancel : function(btn) {
		btn.up('hzsunwin').close();
	},

	deleteNote : function(btn) {
		var g = Ext.getCmp('noteGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		if (g.getSelection().length > 1) {
			Hzsun.Msg.warn('只能选择一条记录');
			return;
		}
		Hzsun.Msg.confirm('确认删除选中记录？', function() {
			Hzsun.Ajax.request({
				url : 'note/deleteNote',
				params : {
					noteId : g.getSelection()[0].get('noteId'),
				},
				success : function(obj) {
					g.getStore().reload();
				}
			});
		});
	},
	
	onItemContextMenu : function(g, record, item, index, e) {
		var menu = Ext.create('Ext.menu.Menu', {
			width : 100,
			floating : true,
			items : [ {
				text : '新增',
				glyph : 0xf055,
				handler : this.openAddNoteWin
			}, {
				text : '修改',
				glyph : 0xf044,
				handler : this.openUpdateNoteWin
			}, {
				text : '删除',
				glyph : 0xf056,
				handler : this.deleteNote
			} ]
		});
		e.stopEvent();
		menu.showAt(e.getXY());
		return false;
	}

});
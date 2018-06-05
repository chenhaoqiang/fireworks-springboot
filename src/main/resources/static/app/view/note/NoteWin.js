Ext.define('App.view.note.NoteWin', {
	extend: 'Hzsun.window.Window',
	xtype: 'notewin',
	width : 400,
	height : 340,
	id : 'noteWin',
	
	requires: ['App.view.note.NoteWinModel', 'App.view.note.NoteController'],
	viewModel: {
		type: 'notewin'
	},
	controller: 'note',
	
	items:[{
		xtype:'hzsunform',
		items : [ {
			xtype : 'hidden',
			itemId : 'noteId',
			name : 'noteId'
		}, {
			xtype : 'hzsuncombo',
			itemId : 'noteType',
			name : 'noteType',
			fieldLabel : '笔记分类',
			bind : {
				store : '{noteTypeDict}'
			},
			displayField: 'dictName',
		    valueField: 'dictNum',
			allowBlank : false
		}, {
			xtype : 'hzsuntextfield',
			itemId : 'noteName',
			name : 'noteName',
			fieldLabel : '笔记名称',
			allowBlank : false
		}, {
			xtype : 'hzsuntextarea',
			itemId : 'content',
			name : 'content',
			fieldLabel : '内容',
			height : 160,
			allowBlank : false
		} ]
	}],
	buttons : [{
		text : '保存',
		handler : 'saveNote'
	},{
		text : '取消',
		handler : 'cancel'
	}],
	
	initComponent: function() {
		this.getViewModel().getStore('noteTypeDict').getProxy().setExtraParams({
			typeNum : comm.get('dictType').NOTE_TYPE
		});
		this.callParent(arguments);
	}
});
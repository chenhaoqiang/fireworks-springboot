Ext.define('App.view.note.Note', {
	extend : 'Hzsun.ux.SimpleGrid',
	xtype : 'note',
	title : '我的笔记',
	id : 'noteGrid',
	selType : 'rowmodel',
	requires : [ 'App.view.note.NoteModel', 'App.view.note.NoteController' ],
	viewModel : {
		type : 'note'
	},
	controller : 'note',
	border : true,
	layout : {
		type : 'hbox',
		align : 'stretch'
	},

	bind : {
		store : '{pagenote}'
	},

	columns : [ {
   		text : '笔记编号',
   		dataIndex : 'noteId',
   		width : 100
   	}, {
   		text : '笔记名称',
   		dataIndex : 'noteName',
   		width : 100
   	}, {
   		text : '笔记分类',
   		dataIndex : 'noteType',
   		width : 100
   	}, {
   		text : '内容',
   		dataIndex : 'content',
   		width : 400
   	} ],

	functionButtons : [ {
		text : '新增',
		glyph : 0xf055,
		moduleCode : '0020201',
		handler : 'openAddNoteWin'
	}, {
		text : '修改',
		glyph : 0xf044,
		moduleCode : '0020202',
		handler : 'openUpdateNoteWin'
	}, {
		text : '删除',
		glyph : 0xf056,
		moduleCode : '0020203',
		handler : 'deleteNote'
	} ],

	queryItems : [ {
		xtype : 'hzsundatefield',
		name : 'createDate',
		fieldLabel : '创建日期'
	}, {
		xtype : 'hzsuncombo',
		name : 'noteType',
		fieldLabel : '笔记分类',
		bind : {
			store : '{noteTypeDict}'
		},
	    displayField: 'dictName',
	    valueField: 'dictNum'
	}, {
		xtype : 'hzsuntextfield',
		name : 'noteName',
		fieldLabel : '笔记名称'
	} ],

	bbar : {
		xtype : 'hzsunpagingtoolbar',
		bind : {
			store : '{pagenote}'
		}
	},

	listeners : {
		'itemcontextmenu' : 'onItemContextMenu'
	},

	initComponent : function() {
		this.getViewModel().getStore('noteTypeDict').getProxy().setExtraParams({
			typeNum : comm.get('dictType').NOTE_TYPE
		});
		this.callParent(arguments);
	}

});
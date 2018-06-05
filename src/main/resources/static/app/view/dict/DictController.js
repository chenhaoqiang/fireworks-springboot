Ext.define('App.view.dict.DictController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.dict',

	init : function() {
	},

	openAddDictWin : function(btn) {
		var win = Ext.create('App.view.dict.DictWin', {
			title : '新增数据字典',
			actionType : 'I'
		});
		win.show(null, function() {
			win.down('#typeNum').focus();
		});
	},

	openUpdateDictWin : function(btn) {
		var g = Ext.getCmp('dictGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		if (g.getSelection().length > 1) {
			Hzsun.Msg.warn('只能选择一条记录');
			return;
		}
		var win = Ext.create('App.view.dict.DictWin', {
			title : '修改数据字典',
			actionType : 'U'
		});
		win.show(null, function() {
			var rec = g.getSelection()[0];
	        if (rec) {
	        	win.down('hzsunform').getForm().loadRecord(rec);
	        }
        	// TODO win.down('#').setEditable(false);
        	win.down('#dictNum').focus();
		});
	},

	saveDict : function(btn) {
		var win = btn.up('hzsunwin');
		var url = win.getActionType() === 'U' ? 'dict/updateDict'
				: 'dict/addDict';
		var form = win.down('hzsunform').getForm();
		if (form.isValid()) {
			Hzsun.Ajax.request({
				url : url,
				params : form.getValues(),
				maskTarget : win,
				success : function(obj) {
					win.close();
					Ext.getCmp('dictGrid').getStore().reload();
				}
			});
		}
	},

	cancel : function(btn) {
		btn.up('hzsunwin').close();
	},

	deleteDict : function(btn) {
		var g = Ext.getCmp('dictGrid');
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
				url : 'dict/deleteDict',
				params : {
							typeNum : g.getSelection()[0].get('typeNum'),
							dictNum : g.getSelection()[0].get('dictNum')				},
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
				handler : this.openAddDictWin
			}, {
				text : '修改',
				glyph : 0xf044,
				handler : this.openUpdateDictWin
			}, {
				text : '删除',
				glyph : 0xf056,
				handler : this.deleteDict
			} ]
		});
		e.stopEvent();
		menu.showAt(e.getXY());
		return false;
	}

});
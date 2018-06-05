Ext.define('App.view.module.ModuleController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.module',

	init : function() {
	},

	openAddModuleWin : function(btn) {
		var win = Ext.create('App.view.module.ModuleWin', {
			title : '新增模块',
			actionType : 'I'
		});
		win.show(null, function() {
			win.down('#moduleCode').focus();
		});
	},

	openUpdateModuleWin : function(btn) {
		var g = Ext.getCmp('moduleGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		if (g.getSelection().length > 1) {
			Hzsun.Msg.warn('只能选择一条记录');
			return;
		}
		var win = Ext.create('App.view.module.ModuleWin', {
			title : '修改模块',
			actionType : 'U'
		});
		win.show(null, function() {
			var rec = g.getSelection()[0];
	        if (rec) {
	        	win.down('hzsunform').getForm().loadRecord(rec);
	        }
	        win.down('#moduleCode').setEditable(false);
	        win.down('#parentCode').focus();
		});
	},

	saveModule : function(btn) {
		var win = btn.up('hzsunwin');
		var url = win.getActionType() === 'U' ? 'module/updateModule'
				: 'module/addModule';
		var form = win.down('hzsunform').getForm();
		if (form.isValid()) {
			Hzsun.Ajax.request({
				url : url,
				params : form.getValues(),
				maskTarget : win,
				success : function(obj) {
					win.close();
					Ext.getCmp('moduleGrid').getStore().reload();
				}
			});
		}
	},

	cancel : function(btn) {
		btn.up('hzsunwin').close();
	},

	deleteModule : function(btn) {
		var g = Ext.getCmp('moduleGrid');
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
				url : 'module/deleteModule',
				params : {
					moduleCode : g.getSelection()[0].get('moduleCode')
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
				handler : this.openAddModuleWin
			}, {
				text : '修改',
				glyph : 0xf044,
				handler : this.openUpdateModuleWin
			}, {
				text : '删除',
				glyph : 0xf056,
				handler : this.deleteModule
			} ]
		});
		e.stopEvent();
		menu.showAt(e.getXY());
		return false;
	}

});
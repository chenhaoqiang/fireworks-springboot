/*
 * 视图控制器 -角色管理
 */
Ext.define('App.view.role.RoleController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.role',

	init : function() {
	},

	queryRole : function(btn) {
		btn.up('role').down('hzsunpagingtoolbar').moveFirst();
	},

	addRole : function(btn) {
		var win = Ext.create('App.view.role.RoleWin', {
			title : '新增角色'
		});
		win.show();
		win.down('#rolename').focus();
	},

	updateRole : function(btn) {
		var g = Ext.getCmp('roleGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		if (g.getSelection().length > 1) {
			Hzsun.Msg.warn('只能选择一条记录');
			return;
		}
		var win = Ext.create('App.view.role.RoleWin', {
			title : '修改角色'
		});
		win.show(null, function() {
			Hzsun.Ajax.request({
				url : 'role/queryRole',
				params : {
					roleNum : g.getSelection()[0].get('rolenum')
				},
				success : function(obj) {
					win.down('hzsunform').getForm().setValues(obj[0]);
					win.down('#rolename').focus();
				}
			});
		});
	},

	saveRole : function(btn) {
		var win = btn.up('hzsunwin');
		var moduleCodeArr = ExtUtil.getTreeCheckedArr(win.down('hzsuntreepanel'));
		if(Ext.isEmpty(moduleCodeArr)) {
			Hzsun.Msg.warn('请选择角色权限');
			return;
		}
		
		var formPanel = win.down('hzsunform');
		var url = formPanel.down('#rolenum').getValue() ? 'role/updateRole'
				: 'role/addRole';
		var form = formPanel.getForm();
		var params = form.getValues();
		params.moduleCodeJson = Ext.encode(moduleCodeArr);
		if (form.isValid()) {
			Hzsun.Ajax.request({
				url : url,
				params : params,
				maskTarget : win,
				success : function(obj) {
					btn.up('hzsunwin').close();
					Ext.getCmp('roleGrid').getStore().reload();
				}
			});
		}
	},

	cancel : function(btn) {
		btn.up('hzsunwin').close();
	},

	deleteRole : function(btn) {
		var g = Ext.getCmp('roleGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		Hzsun.Msg.confirm('确认删除选中记录？', function() {
			Hzsun.Ajax.request({
				url : 'role/deleteRole',
				params : {
					roleNum : g.getSelection()[0].get('rolenum')
				},
				success : function(obj) {
					Hzsun.Msg.info('删除成功');
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
				handler : this.addRole
			}, {
				text : '修改',
				glyph : 0xf044,
				handler : this.updateRole
			}, {
				text : '删除',
				glyph : 0xf056,
				handler : this.deleteRole
			} ]
		});
		e.stopEvent();
		menu.showAt(e.getXY());
		return false;
	},
	
	onSelectionchange : function(r, selected, e) {
		var s = Ext.getCmp('roleModuleTree').getStore();
		s.getProxy().setExtraParams({
			roleNum : selected[0].get('rolenum')
		});
		s.load();
	}

});
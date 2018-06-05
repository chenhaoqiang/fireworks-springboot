/*
 * 视图控制器 -操作员管理
 */
Ext.define('App.view.operator.OperatorController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.operator',

	init : function() {
	},

	queryOperator : function(btn) {
		btn.up('operator').down('hzsunpagingtoolbar').moveFirst();
	},

	addOperator : function(btn) {
		var win = Ext.create('App.view.operator.OperatorWin', {
			title : '新增操作员'
		});
		win.show();
		win.down('#optname').focus();
	},

	updateOperator : function(btn) {
		var g = Ext.getCmp('operatorGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		if (g.getSelection().length > 1) {
			Hzsun.Msg.warn('只能选择一条记录');
			return;
		}
		var win = Ext.create('App.view.operator.OperatorWin', {
			title : '修改操作员'
		});
		win.show(null, function() {
			Hzsun.Ajax.request({
				url : 'operator/queryOperator',
				params : {
					optNum : g.getSelection()[0].get('optnum')
				},
				success : function(obj) {
					win.down('hzsunform').getForm().setValues(obj[0]);
					win.down('#optname').focus();
				}
			});
		});
	},

	saveOperator : function(btn) {
		var win = btn.up('hzsunwin');
		var roleNumArr = ExtUtil.getGridSelectedArr(win.down('hzsungrid'), 'rolenum');
		if(Ext.isEmpty(roleNumArr)) {
			Hzsun.Msg.warn('请选择操作员角色');
			return;
		}
		
		var formPanel = win.down('hzsunform');
		var url = formPanel.down('#optnum').getValue() ? 'operator/updateOperator'
				: 'operator/addOperator';
		var form = formPanel.getForm();
		var params = form.getValues();
		params.roleNumJson = Ext.encode(roleNumArr);
		if (form.isValid()) {
			Hzsun.Ajax.request({
				url : url,
				params : params,
				maskTarget : win,
				success : function(obj) {
					btn.up('hzsunwin').close();
					Ext.getCmp('operatorGrid').getStore().reload();
				}
			});
		}
	},

	cancel : function(btn) {
		btn.up('hzsunwin').close();
	},

	deleteOperator : function(btn) {
		var g = Ext.getCmp('operatorGrid');
		if (g.getSelection().length == 0) {
			Hzsun.Msg.warn('请选择一条记录');
			return;
		}
		Hzsun.Msg.confirm('确认删除选中记录？', function() {
			Hzsun.Ajax.request({
				url : 'operator/deleteOperator',
				params : {
					optNum : g.getSelection()[0].get('optnum')
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
				handler : this.addOperator
			}, {
				text : '修改',
				glyph : 0xf044,
				handler : this.updateOperator
			}, {
				text : '删除',
				glyph : 0xf056,
				handler : this.deleteOperator
			} ]
		});
		e.stopEvent();
		menu.showAt(e.getXY());
		return false;
	},
	
	onSelectionchange : function(r, selected, e) {
		var s = Ext.getCmp('optRoleGrid').getStore();
		s.getProxy().setExtraParams({
			optNum : selected[0].get('optnum')
		});
		s.load();
	}

});

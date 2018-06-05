/*
 * 视图模型 - 角色窗口
 */
Ext.define("App.view.role.RoleWinModel", {
	extend : "Ext.app.ViewModel",
	alias : "viewmodel.rolewin",
	requires : [ "App.store.CheckBoxModule" ],

	data : {},

	stores : {
		checkboxmodule : {
			type : "checkboxmodule",
			autoLoad : true,
			listeners : {
				load : function(store, records) {
					if (!Ext.getCmp('roleWin').down('hzsunform').down(
							'#rolenum').getValue()) {
						return;
					}
					var roleNum = Ext.getCmp('roleGrid').getSelection()[0]
							.get('rolenum');
					Hzsun.Ajax.request({
						url : 'module/queryModule',
						params : {
							roleNum : roleNum
						},
						success : function(obj) {
							if (obj) {
								for ( var i = 0; i < obj.length; i++) {
									store.findRecord('id', obj[i].modulecode)
											.set('checked', true);
								}
							}
						}
					});
				}
			}
		}
	}
});

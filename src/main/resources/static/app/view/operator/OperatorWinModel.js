/*
 * 视图模型 - 操作员窗口管理
 */
Ext.define("App.view.operator.OperatorWinModel", {
	extend : "Ext.app.ViewModel",
	alias : "viewmodel.operatorwin",
	requires : [ 'App.store.Dict', 'App.store.Role' ],

	data : {},

	stores : {
		idTypeDict : {
			type : "dict",
			autoLoad : true
		},
		role : {
			type : "role",
			autoLoad : true,
			listeners : {
				load : function(store, records) {
					if (!Ext.getCmp('operatorwin').down('hzsunform').down(
							'#optnum').getValue()) {
						return;
					}
					var optNum = Ext.getCmp('operatorGrid').getSelection()[0]
							.get('optnum');
					Hzsun.Ajax.request({
						url : 'role/queryRole',
						params : {
							optNum : optNum
						},
						success : function(obj) {
							if (obj) {
								for ( var i = 0; i < obj.length; i++) {
									var r = store.findRecord('rolenum',
											obj[i].rolenum);
									Ext.getCmp('operatorwin').down('hzsungrid')
											.getSelectionModel()
											.select(r, true);
								}
							}
						}
					});
				}
			}
		}
	}
});

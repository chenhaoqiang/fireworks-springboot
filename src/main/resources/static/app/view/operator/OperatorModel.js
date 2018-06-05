/*
 * 视图模型 - 操作员管理
 */
Ext.define("App.view.operator.OperatorModel", {
	extend : "Ext.app.ViewModel",
	alias : "viewmodel.operator",
	requires : [ "App.store.page.Operator", 'App.store.Role' ],

	data : {},

	stores : {
		pageoperator : {
			type : "pageoperator",
			autoLoad : true,
			listeners: {
				beforeload : function(s) {
					s.getProxy().setExtraParams({
						optName : Ext.getCmp('operatorGrid').down('#optName').getValue()
					});
				}
			}
		},
		role : {
			type : "role",
			autoLoad : false
		}
	}
});

/*
 * 视图 - 操作员管理
 */
Ext.define('App.view.operator.Operator', {
	extend : 'Hzsun.panel.Panel',
	xtype : 'operator',
	title : '操作员管理',
	layout : 'column',
	requires : [ 
        'App.view.operator.OperatorModel',
        'App.view.operator.OperatorController',
        'App.view.operator.OperatorGrid',
        'App.view.operator.RoleGrid'
    ],
	viewModel : {
		type : 'operator'
	},
	controller : 'operator',
	
	items : [{
		xtype : 'operatorgrid'
	}, {
		xtype : 'optrolegrid'
	}],

	initComponent : function() {
		this.callParent(arguments);
	}
});
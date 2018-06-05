Ext.define('App.view.dict.DictWin', {
	extend: 'Hzsun.window.Window',
	xtype: 'dictwin',
	width : 400,
	height : 300,
	id : 'dictWin',
	
	requires: ['App.view.dict.DictController', 'App.view.dict.DictWinModel'],
	viewModel: {
		type: 'dictwin'
	},
	controller: 'dict',
	
	items:[{
		xtype:'hzsunform',
		items : [ {
			xtype : 'hzsuncombo',
			itemId : 'typeNum',
			name : 'typeNum',
			fieldLabel : '字典类型',
			bind : {
				store : '{dicttype}'
			},
			displayField: 'typeName',
		    valueField: 'typeNum',
			allowBlank : false
		}, {
			xtype : 'hzsuntextfield',
			itemId : 'dictNum',
			name : 'dictNum',
			fieldLabel : '字典编号',
			allowBlank : false
		}, {
			xtype : 'hzsuntextfield',
			itemId : 'dictCode',
			name : 'dictCode',
			fieldLabel : '字典代码',
			allowBlank : false
		}, {
			xtype : 'hzsuntextfield',
			itemId : 'dictName',
			name : 'dictName',
			fieldLabel : '字典名称',
			allowBlank : false
		}, {
			xtype : 'hzsuntextfield',
			itemId : 'parentDictNum',
			name : 'parentDictNum',
			fieldLabel : '父类字典序号',
			allowBlank : true
		}, {
			xtype : 'hzsuntextfield',
			itemId : 'remark',
			name : 'remark',
			fieldLabel : '备注',
			allowBlank : true
		} ]
	}],
	buttons : [{
		text : '保存',
		handler : 'saveDict'
	},{
		text : '取消',
		handler : 'cancel'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
});
Ext.define('Hzsun.form.field.Display', {
	extend : 'Ext.form.field.Display',
	xtype : 'hzsundisplayfield',
	labelAlign : 'right',

	// 组件初始化，在构造方法之后执行
	initComponent : function() {
		this.callParent(arguments);
	}
});
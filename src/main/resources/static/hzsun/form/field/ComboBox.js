Ext.define('Hzsun.form.field.ComboBox', {
	extend : 'Ext.form.field.ComboBox',
	xtype : 'hzsuncombo',
	allowBlank : true,
	labelAlign : 'right',
	editable : false,

	// 组件初始化，在构造方法之后执行
	initComponent : function() {
		var me = this;
		// 不允许为空则标签前自动加*
		if (!me.allowBlank) {
			me.beforeLabelTextTpl = '<span style="color:red;">*</span>';
		}

		this.callParent(arguments);
	}
});
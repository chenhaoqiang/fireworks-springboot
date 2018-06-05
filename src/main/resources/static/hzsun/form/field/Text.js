Ext.define('Hzsun.form.field.Text', {
	extend : 'Ext.form.field.Text',
	xtype : 'hzsuntextfield',
	allowBlank : true,
	labelAlign : 'right',

	// 组件初始化，在构造方法之后执行
	initComponent : function() {
		var me = this;
		// 不允许为空则标签前自动加*
		if (!me.allowBlank) {
			me.beforeLabelTextTpl = '<span style="color:red;">*</span>';
		}

		// 如果vtype不存在、maxLength存在，则自动增加vtype和vtypeText提示
		if (!me.vtype && me.maxLength) {
			me.vtype = 'textLength';
			me.vtypeText = '不能超过' + me.maxLength + '个字符，1个汉字占2个字符';
		}
		this.callParent(arguments);
	}
});
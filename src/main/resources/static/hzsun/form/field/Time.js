Ext.define('Hzsun.form.field.Time', {
	extend : 'Ext.form.field.Time',
	xtype : 'hzsuntimefield',
	allowBlank : true,
	labelAlign : 'right',
	format : 'H:i',
	// 组件初始化，在构造方法之后执行
	initComponent : function() {
		var me = this;
		// 不允许为空则标签前自动加*
		if (!me.allowBlank) {
			me.beforeLabelTextTpl = '<span style="color:red;">*</span>';
		}

        if (me.format == 'H:i') {
            me.invalidText = "{0} 是无效的时间 - 必须符合格式： {1} - 例如：12:00";
        } else if (me.format == 'H:i:s') {
            me.invalidText = "{0} 是无效的时间 - 必须符合格式： {1} - 例如：12:00:00";
        }

		this.callParent(arguments);
	}
});
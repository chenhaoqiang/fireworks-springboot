Ext.define('Hzsun.form.field.Date', {
	extend : 'Ext.form.field.Date',
	xtype : 'hzsundatefield',
	allowBlank : true,
	labelAlign : 'right',
	format : 'Y-m-d',
	// 组件初始化，在构造方法之后执行
	initComponent : function() {
		var me = this;
		// 不允许为空则标签前自动加*
		if (!me.allowBlank) {
			me.beforeLabelTextTpl = '<span style="color:red;">*</span>';
		}

        if (me.format == 'Y-m-d') {
            me.invalidText = "{0} 是无效的日期 - 必须符合格式： {1} - 例如：1970-01-01";
        } else if (me.format == 'Y-m') {
            me.invalidText = "{0} 是无效的日期 - 必须符合格式： {1} - 例如：1970-01";
        } else if (me.format == 'Y') {
            me.invalidText = "{0} 是无效的日期 - 必须符合格式： {1} - 例如：1970";
        } else if (me.format == 'Y-m-d H:i:s') {
            me.invalidText = "{0} 是无效的日期 - 必须符合格式： {1} - 例如：1970-01-01 12:00:00";
        }

		this.callParent(arguments);
	}
});
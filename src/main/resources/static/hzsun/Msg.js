Ext.define("Hzsun.Msg", {
	singleton: true,
	info : function(msg) {
		return Ext.Msg.show({
			title : '信息',
			msg : msg,
			buttons : Ext.MessageBox.OK,
			icon : Ext.MessageBox.INFO
		});
	},
	warn : function(msg) {
		return Ext.MessageBox.show({
			title : '警告',
			msg : msg,
			buttons : Ext.MessageBox.OK,
			icon : Ext.MessageBox.WARNING
		});
	},
	error : function(msg) {
		return Ext.MessageBox.show({
			title : '错误',
			msg : msg,
			buttons : Ext.MessageBox.OK,
			icon : Ext.MessageBox.ERROR
		});
	},
	confirm : function(msg, yes) {
		return Ext.Msg.confirm('提示', msg ? msg : '确认本次操作？', function(btn) {
			if (btn == 'yes') {
				yes();
			}
		});
	},
    deleteConfirm : function(yes) {
        return Ext.Msg.confirm('删除提示', '确定要删除选中的记录吗？', function(btn) {
            if (btn == 'yes') {
                yes();
            }
        });
    }
});
/**
 * 自定义store。 - 默认不自动加载 - 默认分页20
 * 
 * @author chenhaoqiang
 */
Ext.define('Hzsun.data.Store', {
	extend : 'Ext.data.Store',
	autoLoad : false,
	pageSize : 20,
	listeners : {
		load : function(self, records, successful, operation, eOpts) {
			if (!successful) {
				console.log(operation.error);
				Hzsun.Msg.error("服务器返回错误：" + operation.error.status);
				return;
			}
			var respObj = Ext.decode(operation.getResponse().responseText);
			if (respObj.errmsg) {
				Hzsun.Msg.error(respObj.errmsg);
			}
		}
	}
});
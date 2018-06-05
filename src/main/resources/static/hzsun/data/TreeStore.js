/**
 * 自定义store。 
 * - 默认不自动加载
 * 
 * @author chenhaoqiang
 */
Ext.define('Hzsun.data.TreeStore', {
	extend : 'Ext.data.TreeStore',
	model: "Ext.data.TreeModel",
	autoLoad : false,
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
/**
 * 自定义ajax。
 *  - 默认read是post请求
 *  - 默认reader是json，根节点是records，total节点是totalCount
 * 
 * @author chenhaoqiang
 */
Ext.define('Hzsun.data.proxy.Ajax', {
	extend : 'Ext.data.proxy.Ajax',
	alias : 'proxy.hzsunajax',
	
	actionMethods : {
		create : 'POST',
		read : 'POST',
		update : 'POST',
		destroy : 'POST'
	},
	reader : {
		type : "json",
		rootProperty : "list",
		totalProperty : "total"
	}
});
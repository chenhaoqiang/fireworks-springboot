/**
 * 数据字典工厂类
 */
Ext.define("factory.DictFactory", {
	statics : {
		dictItems : new Ext.util.MixedCollection(),

		getItemByDDCode : function(code) {
			if (Ext.isEmpty(code)) {
				return [];
			}
			var params = {
				code : code
			};
			var dictItem = [];
			if (!this.ddItems.containsKey(code)) {
				// 发送ajax去加载
				Ext.Ajax.request({
					url : '/public/getDict',
					method : 'POST',
					params : params,
					timeout : 4000,
					async : false,// 很关键 我不需要异步操作
					success : function(response, opts) {
						dictItem = Ext.decode(response.responseText);

					}
				});
				this.dictItems.add(code, dictItem);
			} else {
				dictItem = this.dictItems.get(code);
			}
			return ddItem;
		},
		clearAll : function() {
			this.dictItems = new Ext.util.MixedCollection();
		}
	}
});
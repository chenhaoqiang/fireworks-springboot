/**
 * 模型工厂类
 */
Ext.define("App.factory.ModelFactory",
		{
			statics : {
				models : new Ext.util.MixedCollection(),
				fields : new Ext.util.MixedCollection(),

				getModelByName : function(modelName, excludes) {
					var params = {
						modelName : comm.get("modelPackageName") + modelName
					};
					if (!Ext.isEmpty(excludes)) {
						params.excludes = excludes;
					}
					if (!Ext.isEmpty(modelName)
							&& !this.models.containsKey(modelName)) {
						var fields = [];
						if (this.fields.containsKey(modelName)) {
							fields = this.fields.get(modelName);
						} else {
							Ext.Ajax.request({
								url : 'public/getModelFields',
								method : 'POST',
								params : params,
								timeout : 4000,
								async : false,// 很关键 我不需要异步操作
								success : function(response, opts) {
									fields = Ext.decode(response.responseText);
								}
							});
							this.fields.add(modelName, fields);
						}
						var newModel = Ext.define(modelName, {
							extend : "Ext.data.Model",
							fields : fields
						});
						this.models.add(modelName, newModel);
					}
					return {
						modelName : modelName,
						model : this.models.get(modelName)
					};
				},
			}
		});
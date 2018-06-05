/* 
 * 数据模型 - 用户
 */
Ext.define("App.model.User", {
	extend: "Ext.data.Model",
	fields: App.factory.ModelFactory.getModelByName('UserDTO')
});

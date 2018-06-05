/* 
 * 视图控制器 - 系统主页
 */
Ext.define("App.view.main.MainController", {
	extend : "Ext.app.ViewController",
	alias : "controller.main",

	// 点击菜单
	onMenuClick : function(view, rec, item, index) {
		if(!rec.isLeaf()) {
			return;
		}
		var me = this;
		var moduleTag = rec.data.moduleTag;
		var module = moduleTag.split('.')[0];
		if (module && moduleTag) {
			Ext.require([ "App.view." + moduleTag ], function() {
				me.loadModule(module);
			});
		} else {
			// Ext.Msg.alert("错误", "加载模块失败！");
		}
	},

	// 加载模块
	loadModule : function(module) {
		var content = this.content ? this.content : content = Ext
				.getCmp("mainContent");
		var m = content.getComponent(module);
		if (m) {
			content.remove(m);
		}

		var tab = null;
		if (module == "desktop") {
			tab = content.insert(0, {
				xtype : module,
				closable : false,
				itemId : module
			});
		} else {
			tab = content.add({
				xtype : module,
				closable : true,
				itemId : module
			});
		}
		content.setActiveItem(tab);
	},

	// 退出系统
	exitSys : function() {
		window.location = '/fireworks/logout';
	}
});
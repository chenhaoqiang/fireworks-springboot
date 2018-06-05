Ext.define("App.view.login.LoginController", {
	extend: "Ext.app.ViewController",
	alias: "controller.login",
	uses: ["App.view.main.Main"],
	
	onSpecialKey: function(field, e) {
		if(e.getKey() == e.ENTER) {
			this.doLogin();
		}
	},
	
	onLogin: function() {
		this.doLogin();
	},
	
	doLogin: function() {
		var form = this.lookupReference("loginForm");
		if(form.isValid()) {
			var v = this.getView();
			Hzsun.Ajax.request({
				url : 'login',
				params : form.getValues(),
				success : function(obj) {
					v.destroy();
					Ext.create("App.view.main.Main");
				}
			});
		}
	}
});













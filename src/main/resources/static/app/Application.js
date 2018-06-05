Ext.define("App.Application", {
	extend: "Ext.app.Application",
	name: "App",
	controllers: [
		"App.controller.Root" //Global Controller
	],
	stores: [
		//add global/shared stores here
	],
	launch: function() {
		//launch the application
		//Ext.setGlyphFontFamily('FontAwesome');
	}
});

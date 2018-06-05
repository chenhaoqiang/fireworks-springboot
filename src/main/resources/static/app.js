Ext.Loader.setConfig({
	enabled : true,
	paths : {
		'Ext.ux' : 'extjs/ux',
		'Hzsun' : 'hzsun',
		'App.factory' : 'app/util/factory'
	}
});

// 同步加载
Ext.require([
    'App.factory.ModelFactory',
    'Hzsun.window.Window',
    'Hzsun.form.Panel',
    'Hzsun.Ajax',
    'Hzsun.Msg',
    'Hzsun.data.Store',
    'Hzsun.data.proxy.Ajax',
    'Hzsun.button.Button',
    'Hzsun.toolbar.Paging',
    'Hzsun.form.field.Text',
    'Hzsun.grid.Panel',
    'Hzsun.ux.SimpleGrid',
    'Hzsun.ux.SimpleTreeGrid',
    'Hzsun.form.field.ComboBox',
    'Hzsun.form.field.Date',
    'Hzsun.form.field.TextArea',
    'Hzsun.ux.DatetimePicker',
    'Hzsun.ux.DatetimeField',
    'Hzsun.ux.TabCloseMenu',
    'Hzsun.panel.Panel',
    'Hzsun.form.field.Display',
    'Hzsun.tree.Panel',
    'Hzsun.data.TreeStore',
    'Hzsun.tab.Panel',
    'Hzsun.form.field.Number',
    'Hzsun.override.VTypes',
    'Hzsun.ux.ImageView'
]);

Ext.application({
	extend : 'App.Application',
	name : 'App',
	autoCreateViewport : 'App.view.main.Main'
});
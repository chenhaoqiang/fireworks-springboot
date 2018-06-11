Ext.define('App.view.encryptdecrypt.EncryptDecryptModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.encryptdecrypt',
    requires: ['App.store.DataSource'],

    data: {},

    stores: {
        datasource: {
            type: 'datasource',
            autoLoad: true
        }
    }
});

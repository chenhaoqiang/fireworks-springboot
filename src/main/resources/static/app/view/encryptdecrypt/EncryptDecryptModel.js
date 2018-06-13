Ext.define('App.view.encryptdecrypt.EncryptDecryptModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.encryptdecrypt',
    requires: ['App.store.DataSource'],

    data: {},

    stores: {
        datasource: {
            type: 'datasource',
            autoLoad: false
        },
        encrypttype: {
            fields: ['text', 'value'],
            data: [
                {text: '账号', value: 1},
                {text: '操作员编号', value: 2},
                {text: '商户编号', value: 3}
            ]
        },
        decrypttype: {
            fields: ['text', 'value'],
            data: [
                {text: '账号', value: 1},
                {text: '操作员编号', value: 2},
                {text: '商户编号', value: 3}
            ]
        }
    }
});

Ext.define('App.view.encryptdecrypt.EncryptDecryptController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.encryptdecrypt',

    init: function () {
    },

    testConnection: function (btn) {
        var form = btn.up('hzsunform').getForm();
        if (form.isValid()) {
            Hzsun.Ajax.request({
                url: 'public/testConnection',
                params: form.getValues(),
                success: function () {
                    Hzsun.Msg.info('连接成功！');
                }
            });
        }
    },

    encryptPassword: function (btn) {
        var me = this;
        var form = btn.up('hzsunpanel').down('hzsunform').getForm();
        if (form.isValid()) {
            Hzsun.Ajax.request({
                url: 'encryptdecrypt/encryptPassword',
                params: form.getValues(),
                success: function (obj) {
                    me.lookupReference('result').setValue(obj.encryptPassword);
                }
            });
        }
    },

    decryptPassword: function (btn) {
        var me = this;
        var form = btn.up('hzsunpanel').down('hzsunform').getForm();
        if (form.isValid()) {
            Hzsun.Ajax.request({
                url: 'encryptdecrypt/decryptPassword',
                params: form.getValues(),
                success: function (obj) {
                    me.lookupReference('result').setValue(obj.decryptPassword);
                }
            });
        }
    },

    onAccNumChange: function (field, newValue, oldValue) {
        if (newValue) {
            this.lookupReference('decryptBtn').setDisabled(false);
        } else {
            this.lookupReference('decryptBtn').setDisabled(true);
        }
    }

});
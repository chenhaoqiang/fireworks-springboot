Ext.define('App.view.encryptdecrypt.EncryptDecryptController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.encryptdecrypt',

    init: function () {
    },

    encryptPassword: function (btn) {
        var me = this;
        var encryptResult = me.lookupReference('encryptResult');
        encryptResult.setValue('');
        var form = btn.up('hzsunpanel').down('hzsunform').getForm();
        if (form.isValid()) {
            Hzsun.Ajax.request({
                url: 'encryptdecrypt/encryptPassword',
                params: form.getValues(),
                success: function (obj) {
                    encryptResult.setValue(obj.encryptPassword);
                }
            });
        }
    },

    decryptPassword: function (btn) {
        var me = this;
        var decryptResult = me.lookupReference('decryptResult');
        decryptResult.setValue('');
        var form = btn.up('hzsunpanel').down('hzsunform').getForm();
        if (form.isValid()) {
            Hzsun.Ajax.request({
                url: 'encryptdecrypt/decryptPassword',
                params: form.getValues(),
                success: function (obj) {
                    decryptResult.setValue(obj.decryptPassword);
                }
            });
        }
    },

    onTypeChangeByEncrypt: function (field, newValue, oldValue) {
        var f = field.nextSibling();
        f.setFieldLabel('<span style="color:red;">*</span>' + field.getRawValue());
    },

    onTypeChangeByDecrypt: function (field, newValue, oldValue) {
        var f = field.nextSibling();
        f.setFieldLabel('<span style="color:red;">*</span>' + field.getRawValue());
    }

});
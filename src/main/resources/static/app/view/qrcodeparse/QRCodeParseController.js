Ext.define('App.view.qrcodeparse.QRCodeParseController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.qrcodeparse',

    init: function () {
    },

    parseQRCode: function (btn) {
        var me = this;
        var parseResult = me.lookupReference('parseResult');
        parseResult.setValue('');
        var form = btn.up('hzsunpanel').down('hzsunform').getForm();
        if (form.isValid()) {
            Hzsun.Ajax.request({
                url: 'qrcodeparse/parseQRCode',
                params: form.getValues(),
                success: function (obj) {
                    if (obj.errmsg) {
                        Hzsun.Msg.error(obj.errmsg);
                        return;
                    }
                    parseResult.setValue(obj.parseResult);
                }
            });
        }
    }

});
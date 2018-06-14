Ext.define('App.view.qrcodeparse.QRCodeParse', {
    extend: 'Hzsun.panel.Panel',
    xtype: 'qrcodeparse',
    title: '二维码解析',
    border: true,
    requires: ['App.view.qrcodeparse.QRCodeParseController', 'App.view.qrcodeparse.QRCodeParseModel'],
    viewModel: {
        type: 'qrcodeparse'
    },
    controller: 'qrcodeparse',

    layout: 'fit',

    items: [{
        xtype: 'hzsunpanel',
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'middle'
        },

        items: [{
            xtype: 'hzsunform',
            border: true,
            layout: 'column',
            width:600,
            fieldDefaults: {
                labelWidth: 100,
                margin: '10 10 30 10',
                columnWidth: 1
            },
            items: [{
                xtype: 'hzsuntextfield',
                fieldLabel: '易通客户号',
                name: 'etClientId',
                allowBlank: false
            }, {
                xtype: 'hzsuntextarea',
                fieldLabel: '二维码字符串',
                emptyText: '请输入二维码字符串',
                name: 'qrCode',
                height: 200,
                allowBlank: false
            }/*, {
                xtype: 'hzsunfilefield',
                buttonOnly: true,
                hideLabel: true,
                buttonText: '上传二维码图片',
                buttonConfig: {
                    glyph: 0xf0ee
                },
                listeners: {
                    change: 'buttonOnlyChange'
                }
            }*/]
        }, {
            xtype: 'container',
            margin: '0 40 0 30',
            layout: {
                type: 'vbox',
                pack: 'center'
            },
            items: [{
                xtype: 'hzsunbutton',
                text: '解析',
                handler: 'parseQRCode'
            }]
        }, {
            xtype: 'hzsuntextarea',
            emptyText: '解析结果',
            reference: 'parseResult',
            width: 500,
            height: 400
        }]
    }]
});
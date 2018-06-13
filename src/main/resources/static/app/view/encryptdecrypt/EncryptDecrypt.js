Ext.define('App.view.encryptdecrypt.EncryptDecrypt', {
    extend: 'Hzsun.panel.Panel',
    xtype: 'encryptdecrypt',
    title: '加密解密',
    requires: ['App.view.encryptdecrypt.EncryptDecryptController', 'App.view.encryptdecrypt.EncryptDecryptModel'],
    viewModel: {
        type: 'encryptdecrypt'
    },
    controller: 'encryptdecrypt',

    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'middle'
    },

    items: [{
        xtype: 'hzsunpanel',
        margin: '0 0 100 0',
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'middle'
        },
        items: [{
            xtype: 'hzsunform',
            border: true,
            width: 300,
            height: 165,
            fieldDefaults: {
                labelWidth: 80,
                margin: '10 10 30 10'
            },
            items: [{
                xtype: 'hzsuncombo',
                name: 'dataSourceId',
                fieldLabel: '数据源',
                bind: {
                    store: '{datasource}'
                },
                displayField: 'dataSourceName',
                valueField: 'dataSourceId',
                allowBlank: false
            }, {
                xtype: 'hzsuncombo',
                name: 'type',
                fieldLabel: '类型',
                bind: {
                    store: '{decrypttype}'
                },
                displayField: 'text',
                valueField: 'value',
                allowBlank: false,
                value: 1,
                listeners: {
                    change: 'onTypeChangeByDecrypt'
                }
            }, {
                xtype: 'hzsuntextfield',
                fieldLabel: '账号',
                name: 'secretKey',
                allowBlank: false
            }]
        }, {
            xtype: 'container',
            margin: '0 40 0 30',
            layout: {
                type: 'vbox',
                pack: 'center'
            },
            items: [{
                xtype: 'hzsunbutton',
                text: '解密',
                reference: 'decryptBtn',
                handler: 'decryptPassword'
            }]
        }, {
            xtype: 'hzsuntextarea',
            emptyText: '解密结果',
            reference: 'decryptResult',
            width: 300,
            height: 200
        }]
    }, {
        xtype: 'hzsunpanel',
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'middle'
        },
        items: [{
            xtype: 'hzsunform',
            border: true,
            width: 300,
            height: 165,
            fieldDefaults: {
                labelWidth: 80,
                margin: '10 10 30 10'
            },
            items: [{
                xtype: 'hzsuntextfield',
                name: 'plainText',
                fieldLabel: '明文密码',
                allowBlank: false
            }, {
                xtype: 'hzsuncombo',
                name: 'type',
                fieldLabel: '类型',
                bind: {
                    store: '{encrypttype}'
                },
                displayField: 'text',
                valueField: 'value',
                allowBlank: false,
                value: 1,
                listeners: {
                    change: 'onTypeChangeByEncrypt'
                }
            }, {
                xtype: 'hzsuntextfield',
                fieldLabel: '账号',
                name: 'secretKey',
                allowBlank: false
            }]
        }, {
            xtype: 'container',
            margin: '0 40 0 30',
            layout: {
                type: 'vbox',
                pack: 'center'
            },
            items: [{
                xtype: 'hzsunbutton',
                text: '加密',
                handler: 'encryptPassword',
                margin: '0 0 20 0'
            }]
        }, {
            xtype: 'hzsuntextarea',
            emptyText: '加密结果',
            reference: 'encryptResult',
            width: 300,
            height: 200
        }]
    }]
});
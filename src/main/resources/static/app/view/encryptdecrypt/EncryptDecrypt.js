Ext.define('App.view.encryptdecrypt.EncryptDecrypt', {
    extend: 'Hzsun.panel.Panel',
    xtype: 'encryptdecrypt',
    title: '加密解密',
    requires: ['App.view.encryptdecrypt.EncryptDecryptController', 'App.view.encryptdecrypt.EncryptDecryptModel'],
    viewModel : {
        type : 'encryptdecrypt'
    },
    controller: 'encryptdecrypt',

    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'middle'
    },

    items: [{
        xtype: 'hzsunform',
        border: true,
        width: 300,
        height: 130,
        fieldDefaults: {
            labelWidth: 60,
            margin: '10 10 30 10'
        },
        items: [{
            xtype : 'hzsuncombo',
            name : 'dataSourceId',
            fieldLabel : '数据源',
            bind : {
                store : '{datasource}'
            },
            displayField: 'dataSourceName',
            valueField: 'dataSourceId',
            allowBlank: false
        }, {
            xtype: 'hzsuntextfield',
            fieldLabel: '易通账号',
            name: 'accNum',
            listeners: {
                change: 'onAccNumChange'
            }
        }]
    }, {
        xtype: 'container',
        margin: '0 40 0 30',
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        items: [/*{
            xtype: 'hzsunbutton',
            text: '加密',
            handler: 'encryptPassword',
            margin: '0 0 20 0'
        },*/ {
            xtype: 'hzsunbutton',
            text: '解密',
            reference: 'decryptBtn',
            handler: 'decryptPassword',
            disabled: true
        }]
    }, {
        xtype: 'hzsuntextarea',
        emptyText: '加密/解密结果',
        reference: 'result',
        width: 400,
        height: 300
    }]
});
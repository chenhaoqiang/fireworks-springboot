Ext.define('App.view.encryptdecrypt.EncryptDecrypt', {
    extend: 'Hzsun.panel.Panel',
    xtype: 'encryptdecrypt',
    title: '加密解密',
    requires: ['App.view.encryptdecrypt.EncryptDecryptController'],
    controller: 'encryptdecrypt',

    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'middle'
    },

    items: [{
        xtype: 'hzsunform',
        border: true,
        frame: true,
        width: 500,
        height: 300,
        fieldDefaults: {
            labelWidth: 140,
            margin: '10 10 30 10'
        },
        items: [{
            xtype: 'hzsuntextfield',
            fieldLabel: 'Oracle数据库连接地址',
            name: 'url',
            allowBlank: false,
            value: 'jdbc:oracle:thin:@192.168.1.101:1521:easytongdb'
        }, {
            xtype: 'hzsuntextfield',
            fieldLabel: '数据库用户名',
            name: 'userName',
            allowBlank: false
        }, {
            xtype: 'hzsuntextfield',
            inputType: 'password',
            fieldLabel: '数据库密码',
            name: 'password',
            allowBlank: false
        }, {
            xtype: 'hzsuntextfield',
            fieldLabel: '易通账号',
            name: 'accNum',
            listeners: {
                change: 'onAccNumChange'
            }
        }],
        buttons: [{
            text: '测试连接',
            handler: 'testConnection'
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
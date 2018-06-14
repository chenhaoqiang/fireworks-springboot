/*
 * 页面头部
 */

Ext.define("App.view.main.Top", {
    extend: "Ext.container.Container",
    xtype: "top",
    id: "top",
    uses: ["App.ux.XBtn"],

    initComponent: function () {
        Ext.apply(this, {
            height: 40,
            border: false,
            layout: "auto",
            items: [{
                xtype: "image",
                //src: "img/logo.png",
                cls: "main-logo"
            }, {
                xtype: "container",
                cls: "top-tool",
                items: [{
                    xtype: "label",
                    bind: {
                        html: '{welcomeDesc}'
                    }
                }, {
                    xtype: "hzsunbutton",
                    text: "设置",
                    glyph: 0xf013,
                    menu: [/*{
                        text: '个人信息',
                        glyph: 0xf2bd,
                        handler: "showUserInfo"
                    }, */{
                        text: '修改密码',
                        glyph: 0xf044,
                        handler: "openUpdateUserPasswordWin"
                    }, {
                        text: '更换皮肤',
                        glyph: 0xf009,
                        menu: [{
                            text: '默认(白色)',
                            handler: "changeThemeToCrisp"
                        }, {
                            text: '经典',
                            handler: "changeThemeToClassic"
                        }, {
                            text: '蓝色',
                            handler: "changeThemeToNeptune"
                        }]
                    }, {
                        text: '退出',
                        glyph: 0xf011,
                        handler: "exitSys"
                    }]
                }]
            }]
        });
        this.callParent(arguments);
    }
});

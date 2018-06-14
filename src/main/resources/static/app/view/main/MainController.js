/* 
 * 视图控制器 - 系统主页
 */
Ext.define("App.view.main.MainController", {
    extend: "Ext.app.ViewController",
    alias: "controller.main",

    // 点击菜单
    onMenuClick: function (view, rec, item, index) {
        if (!rec.isLeaf()) {
            return;
        }
        var me = this;
        var moduleTag = rec.data.moduleTag;
        if (moduleTag) {
            var module = moduleTag.toLowerCase();
            Ext.require(["App.view." + module + "." + moduleTag], function () {
                me.loadModule(module);
            });

            Hzsun.Ajax.request({
                url: 'user/addUserModuleUse',
                params: {
                    userId: comm.get('platformSession').userId,
                    moduleCode: rec.data.id
                },
                success: function () {

                }
            });
        } else {
            // Ext.Msg.alert("错误", "加载模块失败！");
        }
    },

    // 加载模块
    loadModule: function (module) {
        var content = this.content ? this.content : content = Ext
            .getCmp("mainContent");
        var m = content.getComponent(module);
        if (m) {
            content.remove(m);
        }

        var tab = null;
        if (module == "desktop") {
            tab = content.insert(0, {
                xtype: module,
                closable: false,
                itemId: module
            });
        } else {
            tab = content.add({
                xtype: module,
                closable: true,
                itemId: module
            });
        }
        content.setActiveItem(tab);
    },

    // 退出系统
    exitSys: function () {
        window.location = '/fireworks/logout';
    },

    openUpdateUserPasswordWin: function (btn) {
        var win = Ext.create('App.view.main.UserPasswordWin', {
            title: '修改密码'
        });
        win.show(null, function () {
            var userSession = comm.get('platformSession');
            win.down('#userId').setValue(userSession.userId);
            win.down('#userNum').setValue(userSession.userNum);
            win.down('#userName').setValue(userSession.userName);
            win.down('#oriPassword').focus();
        });
    },

    cancel: function (btn) {
        btn.up('hzsunwin').close();
    },

    updateUserPassword: function (btn) {
        var win = btn.up('hzsunwin');
        var form = win.down('hzsunform').getForm();
        if (form.isValid()) {
            var newPassword = win.down('#newPassword').getValue();
            var confirmPassword = win.down('#confirmPassword').getValue();
            if (newPassword != confirmPassword) {
                Hzsun.Msg.warn("两次密码输入不一致");
                return;
            }
            Hzsun.Ajax.request({
                url: 'user/updatePassword',
                params: form.getValues(),
                maskTarget: win,
                success: function (obj) {
                    btn.up('hzsunwin').close();
                    Hzsun.Msg.info('修改密码成功');
                }
            });
        }
    },

    changeThemeToNeptune: function (btn) {
        this.changeTheme('neptune');
    },

    changeThemeToClassic: function (btn) {
        this.changeTheme('classic');
    },

    changeThemeToCrisp: function () {
        this.changeTheme('crisp');
    },

    changeTheme: function (themeName) {
        Ext.util.Cookies.set('fireworks-theme', themeName, new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000));
        Ext.fly('theme').set({href: 'lib/extjs/themes/' + themeName + '/ext-theme-' + themeName + '-all.css'});
    }

});
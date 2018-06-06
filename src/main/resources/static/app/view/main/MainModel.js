/* 
 * 视图模型 - 系统主页
 */
Ext.define("App.view.main.MainModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.main",
    requires: ['App.store.ModuleMenu'],

    data: {
        welcomeDesc: "<i class='icon-user'></i> 欢迎您，" + comm.get('platformSession').userName
    },
    stores: {
        modulemenu: {
            type: 'modulemenu',
            autoLoad: true,
            listeners: {
                load: function (store, records, successful, eOpts) {
                    // 设置导航栏菜单图标
                    /*store.each(function (item) {
                        item.data.icon = item.data.style ? 'lib/img/modules/' + item.data.style + '.png' : 'lib/img/modules/module.png';
                    });*/

                    // 设置首页桌面菜单图标
                    var desktop = Ext.getCmp('desktop').down('hzsunimageview');
                    var desktopData = [];
                    desktopData.push({
                        caption: '最近使用',
                        items: [{
                            src: 'lib/img/modules/role.png',
                            moduleCode: '00101',
                            name: '角色管理'
                        }, {
                            src: 'lib/img/modules/user.png',
                            moduleCode: '00102',
                            name: '用户管理'
                        }, {
                            src: 'lib/img/modules/module.png',
                            moduleCode: '00103',
                            name: '功能模块'
                        }]
                    });

                    desktopData.push({
                        caption: '为你推荐',
                        items: [{
                            src: 'lib/img/modules/role.png',
                            moduleCode: '00101',
                            name: '角色管理'
                        }, {
                            src: 'lib/img/modules/user.png',
                            moduleCode: '00102',
                            name: '用户管理'
                        }]
                    });
                    
                    Ext.each(records, function(rec) {
                        var childs = rec.data.children;
                        var items = [];
                        Ext.each(childs, function (child) {
                            items.push({
                                src: child.style ? 'lib/img/modules/' + child.style + '.png' : 'lib/img/modules/module.png',
                                moduleCode: child.id,
                                name: child.text
                            });
                        });
                        desktopData.push({
                            caption: rec.data.text,
                            items: items
                        });
                    });

                    var desktopStore = Ext.create('Ext.data.Store', {
                        fields: ['caption', 'items'],
                        data: desktopData
                    });
                    desktop.setStore(desktopStore);
                }
            }
        }
    }
});
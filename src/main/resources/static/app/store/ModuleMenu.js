/* 
 * 数据存储 - 权限菜单
 */
Ext.define("App.store.ModuleMenu", {
    extend: "Hzsun.data.TreeStore",
    alias: "store.modulemenu",
    proxy: {
        type: "hzsunajax",
        url: "module/queryModuleMenu",
        reader: {
            type: "json",
            rootProperty: "children"
        }
    },
    rootVisible: false,
    root: {
        text: '导航菜单',
        expanded: true
    }
});
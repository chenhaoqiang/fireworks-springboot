/*
 * 页面底部
 */
Ext.define("App.view.main.Bottom", {
    extend: "Ext.container.Container",
    xtype: "bottom",
    cls: "footer",

    initComponent: function () {
        Ext.apply(this, {
            height: 24,
            items: [{
                xtype: "label",
                text: "Copyright © 2018 浙江正元智慧科技股份有限公司 版权所有"
            }, {
                xtype: "label",
                cls:'footer-vesion',
                text: "fireworks管理系统 v" + comm.get("softwareVersion")
            }]
        });
        this.callParent(arguments);
    }
});

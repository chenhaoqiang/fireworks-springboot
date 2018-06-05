Ext.define('Hzsun.form.field.File', {
    extend : 'Ext.form.field.File',
    xtype : 'hzsunfilefield',

    config : {
        type : undefined
    },

    listeners : {
        afterrender : function (self) {
            if(!self.getType()) {
                return;
            }
            var mimeType = '';
            if('image' == self.getType()) {
                mimeType = 'image/*';
            } else if('excel' == self.getType()) {
                mimeType = 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            } else if ('zip' == self.getType()) {
                mimeType = 'application/zip';
            }
            self.fileInputEl.set({
                accept:mimeType
            });
        }
    },

    // 组件初始化，在构造方法之后执行
    initComponent : function() {
        var me = this;
        if('image' == me.getType()) {
            me.vtype = 'image';
        } else if('excel' == me.getType()) {
            me.vtype = 'excel';
        } else if ('zip' == me.getType()) {
            me.vtype = 'zip';
        }
        this.callParent(arguments);
    }
});
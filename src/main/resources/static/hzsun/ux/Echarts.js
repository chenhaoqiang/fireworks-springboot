Ext.define('Hzsun.ux.Echarts', {
    alias: 'widget.echarts',
    extend: 'Ext.panel.Panel',
    width:'100%',
    height:'100%',
    text: '',
    subtext: '',
    option: null,
    initComponent : function(){
        var me = this;
        me.callParent(arguments);

        me.inputEl = document.createElement('div');
        document.body.appendChild(me.inputEl);
        me.echarts = echarts.init(me.inputEl);
        if (me.option) {
            me.echarts.setOption(me.option);
        }
        me.echartsInnerId=Ext.id();
        me.inputEl.id=me.echartsInnerId;
        me.inputEl.style.height="100%";
        me.inputEl.style.width="100%";
        me.contentEl=me.echartsInnerId;
    },

    onResize: function(o, width, height) {
        var me = this;
        if (me.echarts) {
            me.inputEl.style.height = width;
            me.inputEl.style.width = height;
            me.echarts.resize();
        }
    },
    onDestroy: function(){
        var me = this;
        if(me.rendered){
            try {
                Ext.EventManager.removeAll(me.echarts);
                for (prop in me.echarts) {
                    if (me.echarts.hasOwnProperty(prop)) {
                        delete me.echarts[prop];
                    }
                }
            }catch(e){}
        }
        me.callParent();
    },
    setOption: function(option){
        var me = this;
        me.echarts.setOption(option);
    },
    getOption: function(){
        var me = this;
        return me.echarts.getOption();
    }
});
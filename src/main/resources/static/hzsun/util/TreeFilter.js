Ext.define("Hzsun.util.TreeFilter",{

    filterByText: function(text,property) {
        this.filterBy(text, property);
        this.expandAll();
    },

    findChildMatches: function (record, regExp, property) {
        var me = this;
        if(record.childNodes.length <= 0) {
            return false;
        }

        var cNodes = record.childNodes;
        for(var i=0; i< cNodes.length; i++) {
            if(regExp.test(cNodes[i].get(property))) {
                return true;
            } else {
                if(me.findChildMatches(cNodes[i], regExp, property)) {
                    return true;
                }
            }
        }
        return false;
    },

    filterBy: function(text, property) {
        var me = this;
        var _store = this.getStore();
        // 检索的正则
        var regExp = new RegExp(".*" + text + ".*");
        // 执行检索
        _store.clearFilter();
        _store.filterBy(function(record){
            return regExp.test(record.get(property)) || me.findChildMatches(record, regExp, property);
        });
    },

    clearFilter: function() {
        this.getStore().clearFilter();
    }

});  
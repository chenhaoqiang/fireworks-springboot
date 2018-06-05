Ext.define("Hzsun.tree.Panel", {
	extend : "Ext.tree.Panel",
	xtype : "hzsuntreepanel",
	border : false,
    useArrows: true,
    config : {
        filter : false,
		iconClsArr : undefined
    },
    mixins: {
        treeFilter: 'Hzsun.util.TreeFilter'
    },
    tools:[{
        type:'expand',
        tooltip: '全部展开',
        // hidden:true,
        handler: function(event, toolEl, panelHeader) {
            panelHeader.ownerCt.expandAll();
        }
    }, {
		type:'collapse',
		tooltip: '全部折叠',
        handler: function(event, toolEl, panelHeader) {
            panelHeader.ownerCt.collapseAll();
		}
	}],
    rootVisible:false,

    hideHeaders: true,

    columns : [{
        xtype    : 'treecolumn',
        text     : 'Name',
        width    : Ext.isIE6 ? null : 10000,
        dataIndex: 'text',
        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
        	if(store.isFiltered() && view.ownerCt.getFilter()) {
                var queryText = view.ownerCt.getDockedItems('toolbar[dock="top"] hzsuntextfield')[0].getValue();
                var newValue = "";
                for (var i = 0; i < value.length; i++) {
                    if (queryText.indexOf(value.charAt(i)) == -1) {
                        newValue += value.charAt(i);
                    } else {
                        newValue += '<span style="color: red">' + value.charAt(i) + '</span>';
					}
                }
                return newValue;
			}
            return value;
        }
    }],

    listeners : {
		'checkchange' : function(node, checked, e, eOpts) {
			var me = this;
			me.checkChild(node, checked);
			me.checkParent(node, checked);
		},
        'itemappend' : function(self, node, index, eOpts) {
            if (this.getIconClsArr()) {
                node.data.iconCls = this.getIconClsArr()[node.data.depth - 1];
            }
        }
	},

	initComponent : function() {
        var tbar = this.tbar;
        this.callParent(arguments);

		if(this.getFilter()) {
			var len = this.getDockedItems('[dock="top"]').length;
			this.insertDocked(len, this.getSearchToolbar());
		}
	},

	getSearchToolbar : function () {
		return {
			xtype: 'toolbar',
			dock: 'top',
			items: [{
				xtype: 'hzsuntextfield',
				triggers: {
					clear: {
						cls: 'x-form-clear-trigger',
						handler: function() {
							this.setValue('');
							this.ownerCt.ownerCt.clearFilter();
						}
					}
				},
				width:'100%',
				emptyText:'检索',
				enableKeyEvents: true,
				listeners: {
					keyup: {
						fn: function (field, e) {
                            var panel = this.ownerCt.ownerCt;
                            if (Ext.EventObject.ESC == e.getKey() || Ext.isEmpty(this.getRawValue())) {
                                this.setValue('');
                                panel.clearFilter();
                            } else {
                            	panel.filterByText(this.getRawValue(), 'text');
							}
						}
					}
				}
			}]
		}
    },

    checkChild : function (node, checked) {
        if (node.isLeaf()) {
        	return;
        }
		var me = this;
        node.eachChild(function(cnode) {
            cnode.set('checked', checked);
			me.checkChild(cnode, checked);
        });
    },

    checkParent : function (node, checked) {
        if (node.isRoot()) {
        	return;
        }
        var me = this;
        var pnode = node.parentNode;
        if (checked) {
            pnode.set('checked', true);
        } else {
            var checkCount = 0;
            Ext.Array.each(pnode.childNodes, function(item, index, allItems) {
                if (item.get('checked')) {
                    checkCount++;
                }
            });
            if (checkCount > 0) {
                pnode.set('checked', true);
            } else {
                pnode.set('checked', false);
            }
        }

		me.checkParent(pnode, checked);
    }

});
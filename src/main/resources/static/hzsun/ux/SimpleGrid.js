Ext.define("Hzsun.ux.SimpleGrid", {
	extend: "Hzsun.grid.Panel",
	xtype: "hzsunsimplegrid",
	
	config : {
		functionButtons : undefined,
		queryItems : undefined
	},
	
	initComponent: function() {
		var me = this;
		me.generateQueryForm();
		me.generateFunctionButtons();
		this.callParent(arguments);
	},
	
	generateFunctionButtons : function() {
		var me = this;
		var functionTBar = [];
		if(!me.functionButtons){
			return;
		}
		for(var i=0;i<me.functionButtons.length;i++) {
			var btn = {};
			Ext.apply(btn, me.functionButtons[i]);
			btn.xtype = 'hzsunbutton';
			functionTBar.push(btn);
		}
		if(!me.dockedItems){
			me.dockedItems=[];
		}
		me.dockedItems.push({
			xtype: 'toolbar',
			docked : 'top',
			items: functionTBar
		});
		//me.tbar=functionTBar;
	},
	
	generateQueryForm : function() {
		var me = this;
		// 只有当queryItems存在时才会出现查询、清空按钮
		var qi = me.queryItems;
		if(!qi) {
			return;
		}
		var queryTBar = [];
		for(var i=0;i<qi.length;i++) {
			// 添加回车事件
			qi[i].listeners = qi[i].listeners || {};
			Ext.applyIf(qi[i].listeners, {
				'specialkey' : function(field, e) {
					if (e.getKey() == e.ENTER) {
						me.queryData();
					}
				}
			});
			if (qi[i].xtype == 'hzsuntextfield'&& null == qi[i].regex) {
                qi[i].regex  =  /^[^\s@#%]+$/;
                qi[i].regexText = "不能输入@#%和空格";
			}
			queryTBar.push(qi[i]);
		}
		
		me.dockedItems = [];
		me.dockedItems.push({
			xtype: 'toolbar',
			docked : 'top',
			items : [{
				xtype : 'hzsunform',
				fieldDefaults: {
			        labelAlign: 'right',
			        margin : '0 0 0 0',
			        labelWidth : 60
			    },
				layout : 'hbox',
				items : queryTBar
			},{
				xtype : 'hzsunbutton',
				text : '查询',
				glyph : 0xf002,
				// iconCls : 'search',
				handler : function() {
					me.queryData();
				}
			}, {
				xtype : 'hzsunbutton',
				text : '重置',
				glyph : 0xf0e2,
				// iconCls : 'undo',
				handler :  function() {
					me.resetQueryForm();
				}
			}]
		});
		//me.tbar=queryTBar;
	},
	
	resetQueryForm : function() {
		var me = this;
		me.down('hzsunform').reset();
	},
	
	queryData : function() {
		var me = this;
		//判断是否有效
        var  items = me.getDockedItems('toolbar[dock="top"]')[0].items.items;
        for(var i=0;i<items.length;i++) {
        	if (i<items.length-2 && !(items[i].isValid())){
        		return;
			}
        }
		var ptb = me.down('hzsunpagingtoolbar');
		if(ptb) {
			ptb.moveFirst();
		} else {
			me.getStore().reload();
		}
	}
});
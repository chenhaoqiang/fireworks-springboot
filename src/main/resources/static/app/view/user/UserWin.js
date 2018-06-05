/*
 * 视图 - 用户新增/修改窗口
 */
Ext.define("App.view.user.UserWin", {
	extend: "Hzsun.window.Window",
	xtype: "userwin",
	width : 700,
	height : 400,
	id : 'userwin',
	
	requires: ["App.view.user.UserWinModel", "App.view.user.UserController", 'App.ux.TreePicker'],
    //uses : [],
	viewModel: {
		type: "userwin"
	},
	controller: "user",
	layout : 'column',
	
	items:[{
		xtype:'hzsunform',
		columnWidth : 0.5,
		items : [{
			xtype : 'hidden',
			name : 'userId',
			itemId : 'userId'
		}, {
            xtype : 'hzsuntextfield',
            name : 'userNum',
            itemId : 'userNum',
            fieldLabel : '用户编号',
            allowBlank : false,
            maxLength : 32,
            regex : /^[0-9]{1,}$/,
            regexText : "用户编号只能由数字组成"
        }, {
			xtype : 'hzsuntextfield',
			name : 'userName',
			itemId : 'userName',
			fieldLabel : '用户名称',
			allowBlank : false,
            maxLength : 32
		}/*, {
		    xtype : 'treepicker',
            name : 'deptId',
            fieldLabel: '所属组织机构',
            displayField: 'text',
			store : Ext.create("Hzsun.data.TreeStore", {
				autoLoad : false,
				proxy: {
					type : "hzsunajax",
					url: "dept/queryDept",
                    reader : {
                        type : "json",
                        rootProperty : "children"
                    },
                    extraParams : {
						expandDepth : 0
					}
				},
				root : {
					text : '组织机构列表'
				},
                rootVisible: false
			})
        }*/, {
			xtype : 'hzsuncombo',
			name : 'idType',
			fieldLabel : '证件类型',
			bind : {
				store : '{idTypeDict}'
			},
		    displayField: 'dictName',
		    valueField: 'dictNum'
		}, {
			xtype : 'hzsuntextfield',
			name : 'idNo',
			fieldLabel : '证件号码',
            maxLength : 20
		}, {
			xtype : 'hzsuntextfield',
			name : 'phoneNo',
			fieldLabel : '手机号码',
            maxLength : 32,
            vtype : 'phoneNum'
		}, {
			xtype : 'hzsuntextfield',
			name : 'email',
			fieldLabel : '邮箱',
            maxLength : 64,
            vtype : 'email'
		}, {
			xtype : 'hzsuntextfield',
			name : 'remark',
			fieldLabel : '备注',
            maxLength : 128
		}]
	}, {
		xtype:'hzsungrid',
		title : '用户角色列表',
		border : true,
		columnWidth : 0.48,
		height : 280,
		selType : 'checkboxmodel',
		bind : {
			store : '{role}'
		},
		columns : [ {
			text : '角色编号',
			dataIndex : 'roleId',
			flex : 1
		}, {
			text : '角色名称',
			dataIndex : 'roleName',
			flex : 2
		} ]
	}],
	
	buttons : [{
		text : '保存',
		handler : 'saveUser'
	},{
		text : '取消',
		handler : 'cancel'
	}],
	
	initComponent: function() {
		this.getViewModel().getStore('idTypeDict').getProxy().setExtraParams({
			dictTypeNum : comm.get('dictType').IDTYPE
		});
		this.callParent(arguments);
	}
});

Ext.define("App.view.main.UserPasswordWin", {
	extend: "Hzsun.window.Window",
	xtype: "userpasswordwin",
	width : 400,
	height : 280,

	requires: ["App.view.main.MainController"],
	controller: "main",
	layout : 'column',
	
	items:[{
		xtype:'hzsunform',
		columnWidth : 1,
		items : [{
			xtype : 'hidden',
			name : 'userId',
			itemId : 'userId'
		}, {
            xtype : 'hzsundisplayfield',
            name : 'userNum',
            itemId : 'userNum',
            fieldLabel : '用户编号'
        }, {
            xtype : 'hzsundisplayfield',
            name : 'userName',
            itemId : 'userName',
            fieldLabel : '用户名称'
        }, {
			xtype : 'hzsuntextfield',
            inputType : 'password',
			name : 'oriPassword',
			itemId : 'oriPassword',
			fieldLabel : '原密码',
			allowBlank : false,
            vtype : 'password'
		}, {
            xtype : 'hzsuntextfield',
            inputType : 'password',
            name : 'newPassword',
            itemId : 'newPassword',
            fieldLabel : '新密码',
            allowBlank : false,
            vtype : 'password'
        }, {
            xtype : 'hzsuntextfield',
            inputType : 'password',
            name : 'confirmPassword',
            itemId : 'confirmPassword',
            fieldLabel : '确认新密码',
            allowBlank : false,
            vtype : 'password'
        }]
	}],
	
	buttons : [{
		text : '保存',
		handler : 'updateUserPassword'
	},{
		text : '取消',
		handler : 'cancel'
	}],
	
	initComponent: function() {
		this.callParent(arguments);
	}
});

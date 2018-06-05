/** 静态变量声明 */
var comm = Ext.create('Ext.util.MixedCollection');

/** model包名 */
comm.add('modelPackageName', 'com.hzsun.fw.javabean.dto.');

/** 数据字典类型 */
var dictType = {
	TODO_TYPE : 1,
	TODO_STATUS : 2,
	NOTE_TYPE : 3,
	ID_TYPE : 28
};
comm.add("dictType", dictType);

var ExtUtil = {
    getGridSelectedArr : function(gridPanel, idName) {
        var selectedArr = [];
        var records = gridPanel.getSelection();
        for ( var i = 0; i < records.length; i++) {
            selectedArr.push(records[i].get(idName));
        }
        return selectedArr;
    },
    getTreeCheckedArr : function(treePanel) {
        var checkedArr = [];
        var records = treePanel.getChecked();
        for ( var i = 0; i < records.length; i++) {
            if (!records[i].get('root')) {
                checkedArr.push(records[i].get('id'));
            }
        }
        return checkedArr;
    },
    hasPermission : function(moduleCode) {
        return comm.get('platformSession').moduleCodes.indexOf(moduleCode) == -1 ? false
            : true;
    }
};

var FileUtil = {
    download : function(action, elementObj, target) {
        FormUtil.submit('fileUploadForm', action, target, elementObj);
        var form = document.getElementById('fileUploadForm');
        if (form) {
            form.parentNode.removeChild(form);
        }
    }
};

var FormUtil = {
    submit : function(formId, action, target, elementObj) {
        var form = this.getForm(formId, action, target, elementObj);
        if (form) {
            form.submit();
        }
    },
    getForm : function(formId, action, target, elementObj) {
        if (!formId) {
            formId = 'formId';
        }
        if (!action) {
            action = '';
        }
        if (!target) {
            target = '';
        }
        var form = document.createElement('form');
        form.id = formId;
        form.method = 'post';
        form.target = target;
        form.action = action;
        if (elementObj) {
            for ( var p in elementObj) {
                if (p && '' != p && null != elementObj[p]
                    && undefined != elementObj[p]) {
                    var element = document.createElement('input');
                    element.setAttribute('type', 'hidden');
                    element.setAttribute('name', p);
                    element.setAttribute('value', elementObj[p]);
                    form.appendChild(element);
                }
            }
        }
        document.body.appendChild(form);
        return form;
    }
};

var StringUtil = {
    trim:function(str) {// 去两边空格
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    isChinese:function(str) {// 验证中文
        var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
        var perfix = '，。‘；【】）（……￥！~·“：《》？';
        return reg.test(this.trim(str)) || -1 != perfix.indexOf(str);
    },
    isNum:function(str) {// 验证数字
        var reg = /^[0-9]*$/;
        return reg.test(this.trim(str));
    },
    isCharNum:function(str) {// 验证字母+数字
        var reg = /^[A-Za-z0-9]+$/;
        return reg.test(str);
    },
    isPassword:function(str) {// 密码
        var reg = /^[0-9a-zA-Z_]{6,20}$/;
        return reg.test(this.trim(str));
    },
    isMobileNO:function(str) {// 手机
        var reg = /^1[3|4|5|7|8]\d{9}$/;
        return reg.test(this.trim(str));
    },
    isEmail:function(str) {// 邮箱
        var reg = /\w@\w*\.\w/;
        return reg.test(this.trim(str));
    },
    isIp:function(str) {// ip
        var reg = /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
        return reg.test(this.trim(str));
    },
    isIpv6:function(str) {// ipv6
        var reg = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^:((:[0-9a-fA-F]{1,4}){1,6}|:)$|^[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,5}|:)$|^([0-9a-fA-F]{1,4}:){2}((:[0-9a-fA-F]{1,4}){1,4}|:)$|^([0-9a-fA-F]{1,4}:){3}((:[0-9a-fA-F]{1,4}){1,3}|:)$|^([0-9a-fA-F]{1,4}:){4}((:[0-9a-fA-F]{1,4}){1,2}|:)$|^([0-9a-fA-F]{1,4}:){5}:([0-9a-fA-F]{1,4})?$|^([0-9a-fA-F]{1,4}:){6}:$/;
        return reg.test(this.trim(str));
    },
    isIdCard:function(str) {// 身份证
        var reg = /^((11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82|91)\d{4})((((19|20)(([02468][048])|([13579][26]))0229))|((20[0-9][0-9])|(19[0-9][0-9]))((((0[1-9])|(1[0-2]))((0[1-9])|(1\d)|(2[0-8])))|((((0[1,3-9])|(1[0-2]))(29|30))|(((0[13578])|(1[02]))31))))((\d{3}(x|X))|(\d{4}))$/;
        // 身份证第18位校验
        var flag = str.length == 18 && StringUtil.calculate(str) == str.substring(17);
        return reg.test(this.trim(str)) && flag;
    },
    isPassport:function(str) {// 护照
        var re1 = /^[a-zA-Z]{5,17}$/;
        var re2 = /^[a-zA-Z0-9]{5,17}$/;
        return re1.test(this.trim(str)) || re2.test(this.trim(str));
    },
    isPostCode:function(str) {// 邮编
        var reg = /^[1-9][0-9]{5}$/;
        return reg.test(this.trim(str));
    },
    forbiddenQuotes:function(str) {//禁止输入引号
        var reg = /^([^'"]+$)/;
        return reg.test(this.trim(str));
    },
    /**
     * 计算身份证第18位
     * @param idNo 身份证
     * @return 身份证第18位
     */
    calculate:function(idNo) {
        var identity18th = "";// 第18位-校验位
        var sum = parseInt(idNo.substring(0, 1)) * 7
            + parseInt(idNo.substring(1, 2)) * 9
            + parseInt(idNo.substring(2, 3)) * 10
            + parseInt(idNo.substring(3, 4)) * 5
            + parseInt(idNo.substring(4, 5)) * 8
            + parseInt(idNo.substring(5, 6)) * 4
            + parseInt(idNo.substring(6, 7)) * 2
            + parseInt(idNo.substring(7, 8)) * 1
            + parseInt(idNo.substring(8, 9)) * 6
            + parseInt(idNo.substring(9, 10)) * 3
            + parseInt(idNo.substring(10, 11)) * 7
            + parseInt(idNo.substring(11, 12)) * 9
            + parseInt(idNo.substring(12, 13)) * 10
            + parseInt(idNo.substring(13, 14)) * 5
            + parseInt(idNo.substring(14, 15)) * 8
            + parseInt(idNo.substring(15, 16)) * 4
            + parseInt(idNo.substring(16, 17)) * 2;// 公式求和
        var remainder = sum % 11;// 取余数
        switch (remainder) {
            case 0:
                identity18th = "1";
                break;
            case 1:
                identity18th = "0";
                break;
            case 2:
                identity18th = "X";
                break;
            case 3:
                identity18th = "9";
                break;
            case 4:
                identity18th = "8";
                break;
            case 5:
                identity18th = "7";
                break;
            case 6:
                identity18th = "6";
                break;
            case 7:
                identity18th = "5";
                break;
            case 8:
                identity18th = "4";
                break;
            case 9:
                identity18th = "3";
                break;
            case 10:
                identity18th = "2";
                break;
        }

        return identity18th;
    }
};
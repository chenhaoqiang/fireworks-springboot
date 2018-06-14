Ext.define('Hzsun.override.VTypes', {
    override: 'Ext.form.field.VTypes',

    uses: ['Hzsun.util.String'],

    textLength: function (val, field) {
        if ('' == val) {
            return true;
        }
        var sum = 0;
        for (var i = 0; i < val.length; i++) {
            if (Hzsun.util.String.isChinese(val.substring(i, i + 1))) {
                sum = sum + 2;
            } else {
                sum = sum + 1;
            }
        }
        return sum <= field.maxLength;
    },
    // textLengthText由textfield根据maxLength动态生成

    postCode: function (val, field) {
        return this.postCodeRe.test(val);
    },
    postCodeRe: /^[1-9][0-9]{5}$/,
    postCodeText: '邮编不合法',

    phoneNum: function (val, field) {
        return this.phoneNumRe.test(val);
    },
    phoneNumRe: /^1[3|4|5|7|8]\d{9}$/,
    phoneNumText: '手机号码不合法',

    ip: function (val, field) {
        return this.ipRe.test(val);
    },
    ipRe: /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/,
    ipText: 'ip不合法',

    telephone: function (val, field) {
        return this.telephoneRe.test(val);
    },
    telephoneRe: /^(0?\d{2,3}\-)?[1-9]\d{6,7}(\-\d{1,4})?$/,
    telephoneText: '电话传真不合法',

    url: function (val, field) {
        var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
            + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
            + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
            + "|" // 允许IP和DOMAIN（域名）
            + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
            + "[a-z]{2,6})" // first level domain- .com or .museum
            + "(:[0-9]{1,4})?" // 端口- :80
            + "((/?)|" // a slash isn't required if there is no file name
            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
        this.urlRe = new RegExp(strRegex);
        return this.urlRe.test(val);
    },
    urlRe: null,
    urlText: '地址不合法',

    versionNum: function (val, field) {
        return this.versionNumRe.test(val);
    },
    versionNumRe: /^[0-9a-zA-Z_.]{1,}$/,
    versionNumText: '标准版本号只能由字母、数字、下划线、小数点组成',

    image: function (val, field) {
        return this.imageRe.test(val);
    },
    imageRe: /\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/,
    imageText: '图片文件格式不正确',

    excel: function (val, field) {
        return this.excelRe.test(val);
    },
    excelRe: /\.(xls|xlsx)$/,
    excelText: 'excel文件格式不正确',

    zip: function (val, field) {
        return this.zipRe.test(val);
    },
    zipRe: /\.(zip)$/,
    zipText: 'zip文件格式不正确',

    password: function (val, field) {
        return this.passwordRe.test(val);
    },
    passwordRe: /^([0-9a-zA-Z!@#$%^&*()-_=+.]){6,20}$/,
    passwordText: '密码只能由字母、数字、字符组成，长度不少于6位，不超过20位'

});
Ext.define('Hzsun.form.field.VTypes', {
    override: 'Ext.form.field.VTypes',

    IPAddress:  function(value) {
        return this.IPAddressRe.test(value);
    },
    IPAddressRe: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    IPAddressText: 'Must be a numeric IP address',
    IPAddressMask: /[\d\.]/i,
    
    
    
    textlength:function(val, field) {
		if ('' == val) {
			return true;
		}
		var sum = 0;
		for (var i = 0; i < val.length; i++) {
			if (StringUtil.isChinese(val.substring(i, i + 1))) {
				sum = sum + 2;
			} else {
				sum = sum + 1;
			}
		}
		return sum <= field.maxLength;
	}
});
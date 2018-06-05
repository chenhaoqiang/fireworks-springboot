Ext.define("Hzsun.Ajax", {
	singleton : true,

	defaultMaskMsg : '请求中...',

	request : function(cfg) {
		var target = cfg.maskTarget;
		if(target) {
			target.mask(cfg.maskMsg ? cfg.maskMsg : this.defaultMaskMsg);
		}

		return Ext.Ajax.request({
			url : cfg.url,
            timeout : null == cfg.timeout ? 30000 : cfg.timeout,
			method : null == cfg.method ? 'post' : cfg.method,
			params : cfg.params,
            async : cfg.async ? true : false,
			success : function(response, opts) {
				if(target) {
					target.unmask();
				}
				if (response.responseText) {
					var obj = Ext.decode(response.responseText);
					if (obj.errmsg) {
						Hzsun.Msg.warn(obj.errmsg);
					} else {
						cfg.success(obj);
					}
				} else {
					cfg.success();
				}
			},
			failure : function(response, opts) {
				if(target) {
					target.unmask();
				}
				Hzsun.Msg.error('请求失败', '服务器返回状态码：' + response.status);
			}
		});
	}
});
function login() {
	$.ajax({
		type : 'post',
		url : 'login',
		data : $("#form").serialize(),
		cache : false,
		dataType : 'json',
		success : function(data) {
			if(data.errmsg) {
				$('#modal-body').html(data.errmsg);
				$('#modal').modal({
					keyboard : true
				});
			} else {
				window.location = '/fireworks';
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest);
			console.log(textStatus);
			console.log(errorThrown);
		}
	});
}
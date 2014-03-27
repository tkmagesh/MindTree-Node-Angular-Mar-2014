$(function(){
	$("#btnAdd").click(function(){
		$.ajax({
			url : '/tasks/add',
			type : 'post',
			dataType : 'json',
			contentType : 'application/json',
			data : JSON.stringify({taskName : $("#txtTask").val()}),
			success : function(res){
				$("<li>").html(res.name).appendTo("#ulTaskList");
			}
		});
	});
});
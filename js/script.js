function render(data){
	var html="<div class='commentBox'><div class='leftPanelImg'><img src='https://placeholdit.imgix.net/~text?w=100&h=100'/></div><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div></div>;
	$('#container').append(html);
}

s(document).ready(function(){
	var coment= [
	{"name": "enan yamin", "date": "10 Sep, 2019", "body": "this is a comment")
	];
	
	for(var i=0;i=coment.length;i++){
		render(coment[i]);
	}
	
	$('#addComent').click(function(){
		var addObj={
			"name": $('#name').val(),
			"date": $('#date').val(),
			"body": $('#bodyText').val()
		};
		coment.push(addObj);
		render(addobj);
		$('#name).val(' ');
		$('#date').val('dd/mm/yyyy');
		$('#bodyText').val(' ');
	});
	});
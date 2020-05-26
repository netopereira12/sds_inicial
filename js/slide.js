$(function(){

	var liWidth = $("#galeria ul li").outerWidth();
		speed	= 5000,
		rotate	= setInterval(auto, speed);



	// Mostrar butões
	$("section#galeria").hover(function(){
		$("section#buttons").fadeIn();
	}, function(){
		$("section#buttons").fadeOut();
	});

	// mostrar próximo slide

	$(".next").click(function(e){
		e.preventDefault();
		$("section#galeria ul").css({'width':'99999%'}).animate({left:-liWidth}, function(){
			$("#galeria ul li").last().after($("#galeria ul li").first());
			$(this).css({'left':'0', 'width':'auto'});
		});
	});
	// voltar slide
	$(".prev").click(function(e){
		e.preventDefault();
		$("#galeria ul li").first().before($("#galeria ul li").last().css({'margin-left':-liWidth}));
		$("section#galeria ul").css({'width':'99999%'}).animate({left:liWidth}, function(){
			$("#galeria ul li").first().css({'margin-left':'0'})
			$(this).css({'left':'0', 'width':'auto'});
		});
		
	});

	function auto(){
		$(".next").click();
	}
});




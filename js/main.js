$(document).ready(function(){

	
	
	$( "#see-in-action" ).click(function(event) {
	    event.preventDefault();
		
		$("#monitor").fadeOut(300, function() {
	            $("#monitor").attr('src', 'img/monitor-capture.jpg').fadeIn(400, function() {
					
					setTimeout(function(){
					
						$("#monitor").hide();
			            $("#monitor").attr('src', 'img/monitor-capture-frame.jpg').fadeIn(400);
					
					
					}, 3000);
					
					

		        })
        })
		
		
		
		
		
		
//		$("#monitor").attr('src', 'img/monitor-capture-frame.jpg').fadeIn(1400);;

		
	});
});
	
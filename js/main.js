$(document).ready(function(){

	// Draw our primary frames on load
	var source = $("#monitor-template").html();
	var template = Handlebars.compile(source);
	$('#frame-container').html(template);
	
	// If the "See frames in action" button is clicked, toggle
	// the empty frames markups with the frame comparisons markup
	$( "#see-in-action" ).click(function(event) {
	    event.preventDefault();
		
		if (!$(this).hasClass('active')) {		
			$("#frame-container").fadeOut(300,function(){
				var source = $("#monitor-compare-template").html();
				var template = Handlebars.compile(source);
				$('#frame-container').html(template);
			}).fadeIn(600);
			
			$(this).addClass('active');
		} else {
			$("#frame-container").fadeOut(300,function(){
				var source = $("#monitor-template").html();
				var template = Handlebars.compile(source);
				$('#frame-container').html(template);
			}).fadeIn(600);
			
			$(this).removeClass('active');
		}
	});
});
	
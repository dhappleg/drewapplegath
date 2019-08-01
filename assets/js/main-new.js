$(document).scroll(function() {
	var currentPosition = $(this).scrollTop(); 
	$('#resume-container section').each(function() {
		var sectionStart = $(this).offset().top; 
		var sectionEnd = sectionStart + $(this).height(); 
	});
});
jQuery.noConflict();
jQuery(document).ready(function($){
	
	$('#mainmenu-icon').click(function(e){
		e.preventDefault();
		
		$('#mainmenu-icon').toggleClass('active');
		$('#mainmenu').toggleClass('hidden');
	});
	
});
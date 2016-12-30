/*
 *
 * Pop-up button on button click by Israel Aviñante
 * jQuery version: jQuery Core 3.1.1
 *
 */

jQuery(document).ready(function(){
	// Open popup
	jQuery('.ia-popup-btn').click(function(){
		jQuery('#ia-popup').fadeIn().css('display', 'flex');
	});
	
	// Close popup
	jQuery('#ia-popup').click(function(){
		jQuery(this).fadeOut();
	});
	jQuery('#ia-close-popup').click(function(){
		jQuery('#ia-popup').fadeOut();
	});
	jQuery(document).keyup(function(e){
		if(e.keyCode == 27){
			jQuery('#ia-popup').fadeOut();
		}
	});
});
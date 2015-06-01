$(document).ready(function(){
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.back-to-top').fadeIn(500);
        } else {
            jQuery('.back-to-top').fadeOut(500);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 500);
        return false;
    });})
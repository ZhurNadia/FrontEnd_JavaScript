/**
 * Created by dbimok on 14.10.15.
 */
$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('#preloader .textload').delay(0).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});

$(document).ready(function() {

    $(".team-image-overlay").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        padding :7,
        helpers	: {
            title	: {
                type: 'outside'
            }
        }
    });

    $("#testimonials-carousel").owlCarousel({
        items : 1,
        itemsCustom : false,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        autoPlay:true,
        pagination:true,
        stopOnHover : false,
        paginationNumbers: false


    });
    
});

new WOW().init();
$("#promo").backstretch("images/fog.jpg");


function init() {
    "use strict";
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 250,
            header = document.querySelector(".navbar");
        if (distanceY > shrinkOn) {
            classie.add(header,"fixed");
        } else {
            if (classie.has(header,"fixed")) {
                classie.remove(header,"fixed");
            }
        }
    });
}
window.onload = init();
$(window).resize(function() {
    $('.offset').css('padding-top', $('.navbar').height() + 'px');
});


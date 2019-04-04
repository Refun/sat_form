$(document).ready(function() {
    /**
 Use the FORK button up top to create your own new fiddle test case.
 This fiddle is using the latest version of Slick and jQuery. 
 If your issue occurs in another version; then please use the Framework section in the left-hand-side to change.
**/


        $('.top_slider').slick({
            dots: true,
            infinite: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            autoplay: true,
            arrows: false
        });



    });

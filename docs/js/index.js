
$(document).ready(function() {
    // Owl carousel
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autopaly:true,
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    // Owl carousel
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autopaly:true,
        responsiveClass: true,
        responsive: {
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
});

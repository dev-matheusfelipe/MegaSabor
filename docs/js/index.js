
$(document).ready(function() {
    // Navbar Shrink
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    // Video Popup
    // const videoSrc = $("#palyer-1").attr("src");
    // $(".video-play-btn, .video-popup").on("click", function(){
    //     if($(".video-popup").hasClass("open")){
    //         $(".video-popup").removeClass("open");
    //         $("#palyer-1").attr("src","");
    //     }
    //     else {
    //         $(".video-popup").addClass("open");
    //         if($("#palyer-1").attr("src")==''){
    //             $("#palyer-1").attr("src",videoSrc);
    //         }
            
    //     }
    // });
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
    // Scrollit
    $.crollIt({
        topOffset: -50
    });

});
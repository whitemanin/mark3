$(document).ready(function (){
    $('.gallery__slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        infinite: false,
        autoplay: false,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]


    })
})

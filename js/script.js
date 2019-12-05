$('header .owl-carousel').owlCarousel({
    animateOut: 'bounceInLeft',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});

// $('header li a').owlcarousel({
//     animateOut: 'bounce',
//     items:7,
//     margin:30,
//     stagePadding:30,
//     smartSpeed:450
// });

$('.testimonials .owl-carousel ').owlCarousel({
    animateOut: 'fadeInLeft',
    animateIn: 'flipInX',
    responsive:{
        0:{
            items:1,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    },
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    autoplay: true,
    autoplayTimeout: 2000
});



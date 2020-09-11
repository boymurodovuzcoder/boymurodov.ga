/* ===================================================================
 * Infinity - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";

    var cfg = {
            defAnimation: "fadeInUp", // default css animation		
            scrollDuration: 800, // smoothscroll duration
            mailChimpURL: 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'
        },

        $WIN = $(window);


    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


    /* Preloader 
     * -------------------------------------------------- */
    var ssPreloader = function() {

        $WIN.on('load', function() {

            // force page scroll position to top at page refresh
            $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {

                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");

            });
        });
    };


    /* FitVids
    ------------------------------------------------------ */
    var ssFitVids = function() {
        $(".fluid-video-wrapper").fitVids();
    };


    /*	Masonry
    ------------------------------------------------------ */
    var ssMasonryFolio = function() {

        var containerBricks = $('.bricks-wrapper');

        containerBricks.imagesLoaded(function() {
            containerBricks.masonry({
                itemSelector: '.brick',
                resize: true
            });
        });
    };


    /*	Light Gallery
    ------------------------------------------------------- */
    var ssLightGallery = function() {

        $('#folio-wrap').lightGallery({
            showThumbByDefault: false,
            hash: false,
            selector: ".item-wrap"
        });
    };


    /* Flexslider
     * ------------------------------------------------------ */
    var ssFlexSlider = function() {

        $WIN.on('load', function() {

            $('#testimonial-slider').flexslider({
                namespace: "flex-",
                controlsContainer: "",
                animation: 'slide',
                controlNav: true,
                directionNav: false,
                smoothHeight: true,
                slideshowSpeed: 7000,
                animationSpeed: 600,
                randomize: false,
                touch: true,
            });

        });

    };


    /* Carousel
     * ------------------------------------------------------ */
    var ssOwlCarousel = function() {

        $(".owl-carousel").owlCarousel({
            nav: false,
            loop: true,
            margin: 50,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                400: {
                    items: 3,
                    margin: 30
                },
                600: {
                    items: 4,
                    margin: 40
                },
                1000: {
                    items: 6
                }
            }
        });

    };



    /* Menu on Scrolldown
     * ------------------------------------------------------ */
    var ssMenuOnScrolldown = function() {

        var menuTrigger = $('#header-menu-trigger');

        $WIN.on('scroll', function() {

            if ($WIN.scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            } else {
                menuTrigger.removeClass('opaque');
            }

        });
    };


    /* OffCanvas Menu
     * ------------------------------------------------------ */
    var ssOffCanvas = function() {

        var menuTrigger = $('#header-menu-trigger'),
            nav = $('#menu-nav-wrap'),
            closeButton = nav.find('.close-button'),
            siteBody = $('body'),
            mainContents = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e) {
            e.preventDefault();
            menuTrigger.toggleClass('is-clicked');
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e) {
            e.preventDefault();
            menuTrigger.trigger('click');
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function(e) {
            if (!$(e.target).is('#menu-nav-wrap, #header-menu-trigger, #header-menu-trigger span')) {
                menuTrigger.removeClass('is-clicked');
                siteBody.removeClass('menu-is-open');
            }
        });

    };


    /* Smooth Scrolling
     * ------------------------------------------------------ */
    var ssSmoothScroll = function() {

        $('.smoothscroll').on('click', function(e) {
            var target = this.hash,
                $target = $(target);

            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function() {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('#header-menu-trigger').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };


    /* Placeholder Plugin Settings
     * ------------------------------------------------------ */
    var ssPlaceholder = function() {
        $('input, textarea, select').placeholder();
    };


    /* Alert Boxes
    ------------------------------------------------------- */
    var ssAlertBoxes = function() {

        $('.alert-box').on('click', '.close', function() {
            $(this).parent().fadeOut(500);
        });

    };


    /* Animations
     * ------------------------------------------------------- */
    var ssAnimations = function() {

        if (!$("html").hasClass('no-cssanimations')) {
            $('.animate-this').waypoint({
                handler: function(direction) {

                    var defAnimationEfx = cfg.defAnimation;

                    if (direction === 'down' && !$(this.element).hasClass('animated')) {
                        $(this.element).addClass('item-animate');

                        setTimeout(function() {
                            $('body .animate-this.item-animate').each(function(ctr) {
                                var el = $(this),
                                    animationEfx = el.data('animate') || null;

                                if (!animationEfx) {
                                    animationEfx = defAnimationEfx;
                                }

                                setTimeout(function() {
                                    el.addClass(animationEfx + ' animated');
                                    el.removeClass('item-animate');
                                }, ctr * 30);

                            });
                        }, 100);
                    }

                    // trigger once only
                    this.destroy();
                },
                offset: '95%'
            });
        }

    };


    /* Intro Animation
     * ------------------------------------------------------- */
    var ssIntroAnimation = function() {

        $WIN.on('load', function() {

            if (!$("html").hasClass('no-cssanimations')) {
                setTimeout(function() {
                    $('.animate-intro').each(function(ctr) {
                        var el = $(this),
                            animationEfx = el.data('animate') || null;

                        if (!animationEfx) {
                            animationEfx = cfg.defAnimation;
                        }

                        setTimeout(function() {
                            el.addClass(animationEfx + ' animated');
                        }, ctr * 300);
                    });
                }, 100);
            }
        });

    };


    // /* Contact Form $("#form-id").submit();
    //  * ------------------------------------------------------ */
    function Validation() {

        /* local validation */
        $('#contactForm').validate(
            //	{
            //     submitHandler: function(form) {
            //         var sLoader = $('#submit-loader');
            //         sLoader.fadeIn();

            //         function delay(delayInms) {
            //             return new Promise(resolve => {
            //                 setTimeout(() => {
            //                     resolve(2);
            //                 }, delayInms);
            //             });
            //         }

            //         async function sample() {
            //             let delayres = await delay(1500);
            //             sLoader.fadeOut();
            //             $('#message-warning').hide();
            //             $('#contactForm').fadeOut();
            //             $('#contactForm').submit();
            //             $('#message-success').fadeIn();
            //         }
            //         sample();
            //     }
            // }
        );
    };
    $(".submitform").click(function() {
        var sLoader = $('#submit-loader');

        function delay(delayInms) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(2);
                }, delayInms);
            });
        }
        async function sample() {
            let delayres = await delay(1500);
            sLoader.fadeOut();
        }
        sample();
        sLoader.fadeIn();
        Validation()
    })

    /* Google Maps
     * ------------------------------------------------------ */
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 41.377491, lng: 69.585258 },
            zoom: 6,
            styles: [
                { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
                {
                    featureType: 'administrative',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#c9b2a6' }]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#dcd2be' }]
                },
                {
                    featureType: 'administrative.land_parcel',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#ae9e90' }]
                },
                {
                    featureType: 'landscape.natural',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#93817c' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry.fill',
                    stylers: [{ color: '#a5b076' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#447530' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#f5f1e6' }]
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'geometry',
                    stylers: [{ color: '#fdfcf8' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#f8c967' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#e9bc62' }]
                },
                {
                    featureType: 'road.highway.controlled_access',
                    elementType: 'geometry',
                    stylers: [{ color: '#e98d58' }]
                },
                {
                    featureType: 'road.highway.controlled_access',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#db8555' }]
                },
                {
                    featureType: 'road.local',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#806b63' }]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#8f7d77' }]
                },
                {
                    featureType: 'transit.line',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#ebe3cd' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'geometry',
                    stylers: [{ color: '#dfd2ae' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry.fill',
                    stylers: [{ color: '#b9d3c2' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#92998d' }]
                }
            ]
        })
        var myLatLng = { lat: 40.9937545, lng: 69.3636634 };
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map
        });
        var infowindow = new google.maps.InfoWindow({
            content: "<div style='color: #000000;'>My Location<div>"
        });
        google.maps.event.addListener(marker, 'click', function() {
            map.panTo(this.getPosition());
            map.setZoom(9);
            infowindow.open(map, marker)
        });
    }
    initMap()

    /* Back to Top
     * ------------------------------------------------------ */
    var ssBackToTop = function() {

        var pxShow = 500, // height on which the button will show
            fadeInTime = 400, // how slow/fast you want the button to show
            fadeOutTime = 400, // how slow/fast you want the button to hide
            scrollSpeed = 300, // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
            goTopButton = $("#go-top")

        // Show or hide the sticky footer button
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };



    /* Initialize
     * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssFitVids();
        ssMasonryFolio();
        ssLightGallery();
        ssFlexSlider();
        ssOwlCarousel();
        ssMenuOnScrolldown();
        ssOffCanvas();
        ssSmoothScroll();
        ssPlaceholder();
        ssAlertBoxes();
        ssAnimations();
        ssIntroAnimation();
        ssBackToTop();

    })();


})(jQuery);
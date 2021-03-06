
(function ($) {
   "use strict";

	// Navigation
	$("#menu-toggle").on("click", function(){
		$(".menu-wrap").toggleClass("open");
	});
	$(".menu li").hover(function() {
  	 	$(this).find(".submenu").stop(true, true).delay(1).slideDown(170);
	}, function() {
	    $(this).find(".submenu").stop(true, true).delay(200).slideUp(170);
	});

	$('#mobile-nav').meanmenu();

	//Search
	$("#search-toggle").on("click", function() {
	    $("#search-bar").slideDown(170);
	});
	$("#search-close").on("click", function() {
	    $("#search-bar").slideUp(170);
	});


	// Nivo Light-Box
	var nivoActivator = $('.nivo-activator');
	if (nivoActivator.css("display") == "block"){
   		$('.slider-btn, .nivo-trigger').nivoLightbox({
   			theme: 'default'
   		});
	};

    // Countdown
  if ($('.countdown').length>0) {
    $(".countdown").countdown({
      date: "28 june 2016 12:00:00", // Edit this line
      format: "on"
    },
    function() {
      // This will run when the countdown ends
    });
  }

    // Main Slider
    $(".slider-active").owlCarousel({
    	items: 1,
    	responsiveClass:true,
	    dots: true,
      loop:true,
      animateOut: 'slideOutLeft',
      autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true,
    	responsive:{
	      0:{
	        items:1
	      },
	      450:{
	        items:1,
	      },
	      650:{
         items:1,
	      },
	      991:{
	     	 item:1,
	      },
	    }
    });

	 // Carousels
  if($("#partners-slider").length>0){
    $("#partners-slider").owlCarousel({
    	items: 4,
    	responsiveClass:true,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
	    dots: false,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
    	responsive:{
	      0:{
	        items:1
	      },
	      450:{
	        items:2,
	      },
	      650:{
         items:3,
	      },
	      991:{
	     	 item: 4,
	      },
	    }
    });
  };

  if ($("#post-slider").length>0) {
  	$("#post-slider").owlCarousel({
  		items: 1,
	  	nav : true,
	    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	    autoPlay: true,
	    dots: true,
  	});
  };


  // Causes Filter
	// Causes Filter
  var $causeslist = $('.causes-list');

  // initialize isotope
  if (($causeslist).length> 0) {
    $causeslist.isotope();
    $(window).resize( function(){
      setTimeout(function() {
        $causeslist.isotope('layout');
      }, 1000);
    });
    $(window).load(function(){
       $causeslist.isotope('layout');
    });
  };

  $(".causes-filter").on("click", "li", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    var selector = $(this).attr("data-filter");
    $causeslist.isotope({
      filter: selector,
    });
  });


	// Dropdown
	$(".dropdown ").on("click", function(){
		$(".dropdown-list").toggleClass("on");
	});

	// Dropdown Replaced Texts
	$(".dropdown-list ").on("click", "li",function(){
	    $('.dropdown-label').text($(this).text());
	    $('.dropdown-label').text();
	});


	/*--[ progress bar ]--*/
	$('.progress-bar > span').each(function () {
		var $this = $(this);
		var width = $(this).data('percent');
		$this.css({
			'transition': 'width 3s'
		});
		setTimeout(function () {
			$this.appear(function () {
				$this.css('width', width + '%');
			});
		}, 500);
	});

	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 20,
        animation: 'fade'
    });

    /* --- Google Map --- */
    var locations = [
          ['Adajan Gam', 21.1892539, 72.7876768],
          ['Pal Gam', 21.1961855, 72.7618497],
          ['Kapodra', 21.2206235, 72.8733662]
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: new google.maps.LatLng(21.1591857, 72.7520842),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
	// var mapLocation = new google.maps.LatLng(21.1892539,72.7876768);
  //
	// var $mapis = $('#map');
  //
	// if ($mapis.length > 0) {
  //
	// 	var map;
	// 	map = new GMaps({
	// 		streetViewControl : true,
	// 		overviewMapControl: true,
	// 		mapTypeControl: true,
	// 		zoomControl : true,
	// 		panControl : true,
	// 		scrollwheel: false,
	// 		center: mapLocation,
	// 		el: '#map',
	// 		zoom: 12,
	// 		styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
	// 	});
  //
	// 	var image = new google.maps.MarkerImage('/img/map-icon.png');
  //
	// 	map.addMarker({
	// 		position: mapLocation,
	// 		title: 'Lohana Samaj',
	// 		infoWindow: {
	// 			content: '<p><strong>Lohana Samaj</strong><address>White Orchid</address></p>'
	// 		}
	// 	});
  //
	// }




})(jQuery);

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  // $('.js-scroll-trigger').click(function() {
  //   $('.navbar-collapse').collapse('hide');
  // });

  // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#sideNav'
  // });

})(jQuery); // End of use strict

/*
 *  Adds functionality to set the section to a (hash)id from the address bar
 */
// $(document).scroll( function() {
//   var currentPosition = $(this).scrollTop();
//   $('#resume-container section').each(function () {
//     // Calculate the start and end position of the section
//     var sectionStart = $(this).offset().top;
//     var sectionEnd = sectionStart + $(this).height();
//     // If the current scroll lies between the start and the end of this section
//     if (currentPosition >= sectionStart  && currentPosition < sectionEnd) {
//       console.log($(this).attr('id')); 
//       window.location.hash = $(this).attr('id'); 
//         // Highlight the corresponding anchors
//         // $('a[href=#' + $(this).attr('id') + ']').addClass('highlighted');
//       }
//     });
// });
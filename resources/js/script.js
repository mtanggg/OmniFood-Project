$(document).ready(function() {
  /* FOR THE STICKY NATIVAGATION */
  $(".js--section-features").waypoint(function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    }, {
      offset: "60px;"
  });

  /* SCROLL ON BUTTONS */
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate({ scrollTop: $(".js--section-plans").offset().top }, 1000);
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate({ scrollTop: $(".js--section-features").offset().top }, 1000);
  });

  /* NAVIGATION SCROLL */
  $(function () {
    $("a[href*=#]:not([href=#])").click(function() {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.has.slice(1) + "]");
        if (target.length) {
          $("html,body").animate({
              scrollTop: target.offset().top
            }, 1000);
          return false;
        }
      }
    });
  });

  /* originally Jonas got from "https://css-tricks.com/snippets/jquery/smooth-scrolling/"
  however, it has changed so I typed out his code from lecture vid
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.has.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });*/

  /* ANIMATIONS ON SCROLL */
  $(".js--wp-1").waypoint(function(direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    }, {
      offset: "50%"
    });

  $(".js--wp-2").waypoint(function(direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    }, {
      offset: "50%"
    });

  $(".js--wp-3").waypoint(function(direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    }, {
      offset: "50%"
    });

  $(".js--wp-4").waypoint(function(direction) {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    }, {
      offset: "50%"
    });

  /* MOBILE NAVIGATION */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
$(document).ready(function () {
  $("#hamburgermenu").click(function () {
    $("#sidenavigation").width("350px");
  });

  $(".closesidenav").click(function () {
    $("#sidenavigation").width("0");
  });


  $('.carousel-getstarted').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 1
      }
    }
  })

  $('.main-content .carousel-upcoming').owlCarousel({
    autoplay: false,
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ],
    navContainer: '.main-content .custom-nav',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })

  $('.main-contentpopular .carousel-popular').owlCarousel({
    autoplay: false,
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ],
    navContainer: '.main-contentpopular .custom-nav2',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })

  $('.item-number').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {

        duration: 3000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }

      });



  });

  $('.carousel-emblems').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })


  $('.main-contentexperienced .carousel-experienced').owlCarousel({
    autoplay: false,
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ],
    navContainer: '.main-contentexperienced .custom-nav3',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  })

  $('.main-contentpublications .carousel-publications').owlCarousel({
    autoplay: false,
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ],
    navContainer: '.main-contentpublications .custom-nav4',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })

  $('.main-contentwhat .carousel-what').owlCarousel({
    autoplay: false,
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fal fa-angle-left"></i>',
      '<i class="fal fa-angle-right"></i>'
    ],
    navContainer: '.main-contentwhat .custom-nav5',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 2
      }
    }
  })



});




let acc = document.getElementsByClassName("accordion-edulearn");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });


}

let accabout = document.getElementsByClassName("accordion-aboutus");
let j;

for (j = 0; j < accabout.length; j++) {
  accabout[j].addEventListener("click", function () {
    this.classList.toggle("activeab");
    let panelabout = this.nextElementSibling;
    if (panelabout.style.maxHeight) {
      panelabout.style.maxHeight = null;
    } else {
      panelabout.style.maxHeight = panelabout.scrollHeight + "px";
    }
  });


}



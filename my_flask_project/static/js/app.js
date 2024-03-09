const body = document.querySelector('body');
  /* A medida que se desplaza la página, aumenta el desenfoque */
  $(window).scroll(function(e) {
    var distanceScrolled = $(this).scrollTop();
    $('.menu').css('-webkit-filter', 'blur(' + distanceScrolled / 60 + 'px)');
  });
  
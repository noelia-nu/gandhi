$(document).ready(function(){
  $('a[href^="#"]').click(function (evt) {
      evt.preventDefault();

      var target = this.hash,
          $target = $(target);

      /*$('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });*/
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      });
  });
});
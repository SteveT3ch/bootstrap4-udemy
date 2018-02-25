$(function(){
  $('.navbar-nav li a').on('click', function(event){
    event.preventDefault();
    let target = $(this).attr('href');
    let offsetTop = $(target).offset().top;
    $('html, body').animate({
      scrollTop: offsetTop
    }, 1000);
  });

});

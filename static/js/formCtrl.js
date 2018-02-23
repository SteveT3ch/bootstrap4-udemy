$(function(){

  $('#form').submit(function(event){
    var username = $('#username').val();
    var fullname = $('#name').val();
    var email = $('#email').val();
    var address = $('#address').val();
    var phone = $('#phone').val();

    if (fullname == '') {
      console.log('fullname is blank');
      alert('fullname is blank')
      return false;
    }
  })

});// document ready

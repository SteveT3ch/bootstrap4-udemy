$(function(){
  //$(".container").append('<h2><br>start here</h2>');

  /*
  var years = 35;
  var someText = ' years of age';
  console.log(years + someText);
  */

/*
  // Functions
  function saySomething(){
    console.log('Function data goes here')
  }

  // call function
  saySomething()

  // Function with parameter
  function addSomething(num, str){
    var add = num + str;
    console.log(add);
  }

  addSomething(455, ' data to write')

 */
 /*
 // Conditional
 var hasData = 'datae';

 if (hasData == 'data') {
   console.log('Data is found');
 }else {
   console.log('No data');
 }

 // loops
 var count = 10;
 while( count > 0){
    console.log(count + ': count');
    count--;
 } */
/*
 function processData(data, size){
   if (size > 512 && size > 0){
     console.log('ProcessName:' + data +'\nByte:' + size + 'KB')
   } else if ( size <= 0){
     console.log('No data found');
   }else {
     console.log('Data is to small (min:512KB)');
   }
   return 'some results';
 }

 var result = processData('Claims', 513);
 console.log(result);

 */
 // objects
 var orc = {
   dataType: 'binary',
   size: 1024,
   status: true
 };

 var newDataSize = orc.size + 512;
 console.log('Data:' + newDataSize + 'KB');

 function clickMe(){
   $('#result').append('<h4>Data ='+ orc.size + 'KB</h4>');
 }

$('#btn').on('click', function(){
  clickMe();
})

$('#result').on("mouseenter mouseleave", function(event){
  $(this).toggleClass("text-danger")
})

$('#')


}); // document ready

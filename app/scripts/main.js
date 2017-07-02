$(document).ready(function(){
  $('.one, .two, .three').hide();
  
}, showText('100'));

function showText(){
  $('.one').delay('2000').fadeIn();
  $('.one').delay('2000').fadeOut();
  $('.two').delay('5000').fadeIn();
  $('.two').delay('2000').fadeOut();
  $('.three').delay('8000').fadeIn();
}// End `ShowText`

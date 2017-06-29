$(document).ready(function(){
  /*
    ~ Hide text for a few seconds
    ~ Show text for a few seconds
  */
  $('.one, .two, .three').hide();
  showText().delay('100');
  function showText(){
    $('.one').delay('2000').fadeIn();
    $('.one').delay('2000').fadeOut();
    $('.two').delay('5000').fadeIn();
    $('.two').delay('2000').fadeOut();
    $('.three').delay('8000').fadeIn();
  }
});

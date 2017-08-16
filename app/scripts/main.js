// $(document).ready(function(){
//   $('.one, .two, .three').hide();
//
//   $('button').on('click', function(){
//     $('.navbar-collapse').toggle();
//   });
//
// }, showText('100'));
//
// function showText(){
//   $('.one').delay('2000').fadeIn();
//   $('.one').delay('2000').fadeOut();
//   $('.two').delay('5000').fadeIn();
//   $('.two').delay('2000').fadeOut();
//   $('.three').delay('8000').fadeIn();
// }// End `ShowText`

$(document).ready(function(){
  $('.after').hide();
}, showText('100'));
function showText(){
  $('.after').delay('1000').fadeIn();
}

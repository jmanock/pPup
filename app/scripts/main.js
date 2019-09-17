
var $form = $('form#test-form');
var url = 'https://script.google.com/macros/s/AKfycbwhLzhhNo4gWXnn-sWDFoVFq-ygEAUXQ2m0WpDB1_TT3O90IU8/exec';
$('#submit-form').on('click', function(e){
  e.preventDefault();
  var jqxhr = $.ajax({
    url:url,
    method:'GET',
    dataType:'json',
    data:$form.serializeObject()
  }).success(
    console.log(data);
  );
})

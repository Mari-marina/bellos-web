$('.select-block').click(function() {
  $('.select-block').toggleClass('active');
})

$('.wrap').click(function() {
  var inputText = $(this).text();
  $('.select-placeholder').text(inputText);
})

$('input[type=radio]').click(function() {
  $('.select-block').toggleClass('active');
})
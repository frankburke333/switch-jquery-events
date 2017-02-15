$(document).on('ready', function() {

});

$(function() {
  $('div.switch button').on('click', function(){
    if ($(this).attr('class') === 'on') {
      $(this).toggleClass('on off');
      $("body").toggleClass('light dark');
      $('.status').html("it's too dark");
    }
    else {
      $(this).toggleClass('off on');
      $('.status').html("It's bright in here");
      $("body").toggleClass('dark light');
    }
  });

});

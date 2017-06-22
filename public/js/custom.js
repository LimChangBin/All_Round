
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  $('.my-dropdown').dropdown();
  $('.my-dropdown').tooltip();
  // $('#font').fontselect();

  $(function(){
    $('#font').fontselect().change(function(){
      var font = $(this).val().replace(/\+/g, ' ');
      font = font.split(':');
      $('.btngrouptitle').css('font-family', font[0]);
      $('.windowtitle').css('font-family', font[0]);
    });
  });

  $('.stoppage').click(function(e) {
    e.stopPropagation();
  });
});

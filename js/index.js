$(document).ready(function() {

  $('.menu-item a').click(function() {

    $('.menu-item a').removeClass('selected');
    $(this).addClass('selected');

    current = $(this);

    $('#wrapper').scrollTo($(this).attr('href'), 800);

    return false;
  });

 $('.sidePanelMenu a').click(function() {

    $('.sidePanelMenu a').removeClass('selected');
    $(this).addClass('selected');

    current = $(this);

    $('#wrapper').scrollTo($(this).attr('href'), 800);

    return false;
  });

});



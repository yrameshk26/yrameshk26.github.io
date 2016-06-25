//Jquery for smooth scrolling between pages
$(document).ready(function() {

  $('.menu-item a').click(function() {

    $('.menu-item a').removeClass('selected');
    $(this).addClass('selected');

    current = $(this);

    $('#wrapper').scrollTo($(this).attr('href'), 800);

    return false;
  });

 $('.ca-menu a').click(function() {

    $('.ca-menu a').removeClass('selected');
    $(this).addClass('selected');

    current = $(this);

    $('#wrapper').scrollTo($(this).attr('href'), 800);

    return false;
  });

});


//Jquery for popup display of Home menu icon
$(function() {
  var moveLeft = 20;
  var moveDown = 10;
    
  $('a#homeLink').hover(function(e) {
    $('div#homePop').show();
      }, function() {
    $('div#homePop').hide();
  });
    
    $('a#homeLink').mousemove(function(e) {
    $("div#homePop").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
    
});

//Jquery for popup display of About Me menu icon
$(function() {
  var moveLeft = 20;
  var moveDown = 10;
    
  $('a#aboutLink').hover(function(e) {
    $('div#aboutPop').show();
      }, function() {
    $('div#aboutPop').hide();
  });
    
    $('a#aboutLink').mousemove(function(e) {
    $("div#aboutPop").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
    
});

//Jquery for popup display of Interests menu icon
$(function() {
  var moveLeft = 20;
  var moveDown = 10;
    
  $('a#interestLink').hover(function(e) {
    $('div#interestPop').show();
      }, function() {
    $('div#interestPop').hide();
  });
    
    $('a#interestLink').mousemove(function(e) {
    $("div#interestPop").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
    
});

//Jquery for popup display of Skills menu icon
$(function() {
  var moveLeft = 20;
  var moveDown = 10;
    
  $('a#skillLink').hover(function(e) {
    $('div#skillPop').show();
      }, function() {
    $('div#skillPop').hide();
  });
    
    $('a#skillLink').mousemove(function(e) {
    $("div#skillPop").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
    
});

//Jquery for popup display of Portfolio menu icon
$(function() {
  var moveLeft = 20;
  var moveDown = 10;
    
  $('a#portLink').hover(function(e) {
    $('div#portPop').show();
      }, function() {
    $('div#portPop').hide();
  });
    
    $('a#portLink').mousemove(function(e) {
    $("div#portPop").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
    
});

//Jquery for popup display of Contact Me menu icon
$(function() {
  var moveLeft = 20;
  var moveDown = 10;
    
  $('a#contactLink').hover(function(e) {
    $('div#contactPop').show();
      }, function() {
    $('div#contactPop').hide();
  });
    
    $('a#contactLink').mousemove(function(e) {
    $("div#contactPop").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
  });
    
});
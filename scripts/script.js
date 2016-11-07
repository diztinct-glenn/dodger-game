"use strict";
(function() {

$(document).ready(function() {

// This these next 4 variables relate to my collision detection and came with help from Tims
  var isBetween = function(a, b, c){
    return a <= b && b <= c;
  }

  var pointIsIn = function(point, box){
    var A = {x: box.x, y: box.y};
    var B = {x: box.x + box.width, y: box.y};
    var C = {x: box.x, y: box.y + box.height};
    return isBetween(A.x, point.x, B.x) && isBetween(A.y, point.y, C.y);
  };

  var corners = function(box){
    return(
      [
      {x: box.x, y: box.y},
      {x: box.x + box.width, y: box.y},
      {x: box.x + box.width, y: box.y + box.height},
      {x: box.x, y: box.y + box.height}]
      );
  };

  var boxCollide = function(box1, box2){
    return(
      corners(box1).some(function(corner){return pointIsIn(corner, box2);})
      || corners(box2).some(function(corner){return pointIsIn(corner, box1);}));
  };

// TIMER
  var startTimer = 0
  var timer = setInterval(function() {
      startTimer += 1;
      $('#counter').html(startTimer);
    }, 1000);
  var stopTimer = function() {
    clearInterval(timer);
  };
// New Game
  var newGame = function() {
    document.location.reload(true);
  };

  // Theme music for gameplay duration
  var simpsonsTheme = new Audio('audio/Simpsons_Theme.mp3');
  simpsonsTheme.play();

// Page loaded with landing page of just the Title and Play Button
  var $toggleView = function() {
    $('#game-area').hide();
    $('#timer').hide();
    $('.bart').hide();
    $('#replay-btn').hide();
  }
  $toggleView();

// Start Game
  $('#play-btn').click(function() {
    $('#game-area').show();
    $('#objective').hide();
    $('#play-btn').hide();
    $('#timer').show();
    $('.bart').show();
    timer();
  })
// Restart Game
  $('#replay-btn').click(function () {
    newGame();
  })

 var createSkinner = function() {
    var $gameArea = $('#game-area');
    var skinner = $('<div class="skinner"></div>');
    $gameArea.append(skinner);
    var skinterval = setInterval(function() {
      skinner.css("top",  Math.random() * $gameArea.height());
      skinner.css("left", Math.random() * $gameArea.width());
    }, 2000);
  }
  for(var i=0; i<20; i++) {
    createSkinner();
  }

  var $bart = $('.bart');
  var $skinner = $('.skinner');

//I worked alongside Leslie to try and get a basic understanding of collision detection.
  function getCollision(skinner){

    $(skinner).each(function(index,skinner){

      var $bartH = $bart.outerHeight(true);
      var $bartW = $bart.outerWidth(true);
      var $bartX = $bart.offset().left;
      var $bartY = $bart.offset().top;

      var $ourSkinner = $(skinner);
      var skinnerH = $ourSkinner.outerHeight(true);
      var skinnerW = $ourSkinner.outerWidth(true);
      var skinnerX = $ourSkinner.offset().left;
      var skinnerY = $ourSkinner.offset().top;

      var bartBox = {x: $bartX, y: $bartY, width: $bartW, height: $bartH};
      var skinnerBox = {x: skinnerX, y: skinnerY, width: skinnerW, height: skinnerH};

      var score = parseInt($('#counter').html());

      if (boxCollide(bartBox, skinnerBox)) {
        alert('Congratulations! You got a score of ' + score);
        $('#game-area').hide();
        $('#timer').hide();
        $('.bart').hide();
        $('#replay-btn').show();
        stopTimer();
        alert.preventDefault();
      }
    })
  }

  $("#game-area").mousemove(function(event) {
      $('.bart').css({
        'top': event.pageY,
        'bottom': event.pageX,
        'left': event.pageX,
        'right': event.pageY
      });
      $skinner = $('.skinner')
      getCollision($skinner);
  });

})
})();

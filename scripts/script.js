"use strict";

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
  var startTimer = 0;
  var timer = setInterval(function() {
      startTimer += 1;
      $('#counter').html(startTimer);
    }, 1000);
  var stopTimer = function() {
    clearInterval(timer);
  };
// New Game
  var newGame = function() {
    window.location.reload();
  };

(function() {

$(document).ready(function() {
  // Theme music for gameplay duration
  // var simpsonsTheme = new Audio('audio/Simpsons_Theme.mp3');
  // simpsonsTheme.play();


// TRYING LOCAL STORAGE
//   var updateScore = $('.tops').html();
//    localStorage.setItem('updateScore', updateScore);
//    // return false;

//    if(localStorage.getItem('updateScore')) {
// $('.tops').html(localStorage.getItem('updateScore'));
// }

// Page loaded with landing page of just the Title and Play Button
  var $toggleView = function() {
    $('#game-area').hide();
    $('#leaderboard').hide();
    $('#inputData').hide();
    $('#inputSubmit').hide();
    $('#timer').hide();
    $('.bart').hide();
    $('#try-again').hide();
    $('#replay-btn').hide();
  }
  $toggleView();

// Start Game
  $('#play-btn').click(function() {
    $('#game-area').show();
    $('#leaderboard').show();
    $('#objective').hide();
    $('#play-btn').hide();
    $('#timer').show();
    $('.bart').show();
    timer();
  })

  $('#replay-btn').click(function () {
    newGame();
  })


// Create Nelson Muntz
  // var createNelson = function() {
  //   var $gameArea = $('#game-area');
  //   var nelson = $('<div class="nelson"></div>');
  //   $($gameArea).append(nelson);
  //   setInterval(function() {
  //     nelson.css("top", Math.random() * $gameArea.height());
  //     nelson.css("left", Math.random() * $gameArea.width());
  //   }, 2000)
  //   // return nelson;
  // }

  // for(var i=0; i<5; i++) {
  //   createNelson();
  // }

// Create Martin Prince
  // var createMartin = function() {
  //   var $gameArea = $('#game-area');
  //   var martin = $('<div class="martin"></div>');
  //   $('#game-area').append(martin);
  //   setInterval(function() {
  //     martin.css("top", Math.random() * $gameArea.height());
  //     martin.css("left", Math.random() * $gameArea.width());
  //   }, 2000)
  // }
  // for(var i=0; i<5; i++) {
  //   createMartin();
  // }

// Create Binky
  // var createBinky = function() {
  //   var binky = $('<div class="binky"></div>');
  //   $('#game-area').append(binky);
  // }

  // createBinky();

// Create Sideshow Bob
  // var createSideshowBob = function() {
  //   var sideshowBob = $('<div class="sideshow-bob"</div>');
  //   $('#game-area').append(sideshowBob);
  // }

  // createSideshowBob();

 var createSkinner = function() {
    var $gameArea = $('#game-area');
    var skinner = $('<div class="skinner"></div>');
    $gameArea.append(skinner);
    var skinterval = setInterval(function() {
      skinner.css("top",  Math.random() * $gameArea.height());
      skinner.css("left", Math.random() * $gameArea.width());
    }, 2000);
    // skinner.attr('data', skinterval)
  }
  for(var i=0; i<5; i++) {
    createSkinner();
  }
  var $bart = $('.bart');
  var $skinner = $('.skinner');

function getCollision(skinner){

    $(skinner).each(function(index,skinner){

      var $bartH = $bart.outerHeight(true);
      var $bartW = $bart.outerWidth(true);
      var $bartX = $bart.offset().left;
      var $bartY = $bart.offset().top;

      // var $skinnerH = parseInt($(skinner).css('height').replace('px',''))
      // var $skinnerW = parseInt($(skinner).css('width').replace('px',''))
      // var $skinnerX = parseInt($(skinner).css('left').replace('px',''))
      // var $skinnerY = parseInt($(skinner).css('top').replace('px',''))

      var $ourSkinner = $(skinner);
      var skinnerH = $ourSkinner.outerHeight(true);
      var skinnerW = $ourSkinner.outerWidth(true);
      var skinnerX = $ourSkinner.offset().left;
      var skinnerY = $ourSkinner.offset().top;

      // console.log($skinnerX.left,'skinner');

      var bartBox = {x: $bartX, y: $bartY, width: $bartW, height: $bartH};
      var skinnerBox = {x: skinnerX, y: skinnerY, width: skinnerW, height: skinnerH};

      if(boxCollide(bartBox, skinnerBox)){
        console.log("we did it");
        $('#game-area').hide();
        $('.bart').hide();
        $('#try-again').show();
        $('#replay-btn').show();
        var score = $('#counter').html();
        console.log(score);
        stopTimer();

        var id = $('.id');
        var top = $('.top-ten');
        var spanner = $('<span class ="id"></span>')
        var number = parseInt(id);

        if (boxCollide) {
          var userInput = prompt('Please enter your name for the leaderboard:');
          for(var i=0; i<id.length; i++) {
            if (score > i) {
              $(top).html(userInput + " - ");
              $(top).append(spanner);
              $(spanner).html(score);
            }
          }
          // for(var j=0; j<id.length; j++) {
          //   if (score > j ) {
          //     $(id).html(score);
          //   }
          // }


          prompt.preventDefault();
        } else {
          alert('Sorry you didn\'t make it to the leaderboard.');
          alert.preventDefault();
        }

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

"use strict";

(function() {

// Theme music for gameplay duration
  // var simpsonsTheme = new Audio('audio/start-round.mp3');
  // simpsonsTheme.play();

$(document).ready(function() {

// Page loaded with landing page of just the Title and Play Button
  var $toggleView = function() {
    $('#game-area').hide();
    $('#leaderboard').hide();
    $('#inputData').hide();
    $('#inputSubmit').hide();
    $('#timer').hide();
  }
  $toggleView();

// Start Game
  $('#play-btn').click(function() {
    $('#game-area').show();
    $('#leaderboard').show();
    $('#objective').hide();
    $('#play-btn').hide();
    $('#timer').show();
    var startTimer = 0;
    setInterval(function() {
      startTimer += 1;
      $('#timer').html(startTimer);
    }, 1000);

  })

// Timer

// var startTimer = new Date(),
//     outputDiv = document.getElementById('output') // or $('#output').get(0)
// ;
// setInterval(function () {
//     outputDiv.innerHTML = "ms since the start: " + (new Date() - startTime);
// }, 1000);



// Create Seymour Skinner
  var createSkinner = function() {
    var $gameArea = $('#game-area');
    var skinner = $('<div class="skinner"></div>');
    $($gameArea).append(skinner);
    setInterval(function() {
      skinner.css("top", Math.random() * $gameArea.height());
      skinner.css("left", Math.random() * $gameArea.width());
    }, 2000)
    // return skinner;
  }
  for(var i=0; i<5; i++) {
    createSkinner();
  }
// Create Nelson Muntz
  var createNelson = function() {
    var $gameArea = $('#game-area');
    var nelson = $('<div class="nelson"></div>');
    $($gameArea).append(nelson);
    setInterval(function() {
      nelson.css("top", Math.random() * $gameArea.height());
      nelson.css("left", Math.random() * $gameArea.width());
    }, 2000)
    // return nelson;
  }

  for(var i=0; i<5; i++) {
    createNelson();
  }

// Create Martin Prince
  var createMartin = function() {
    var $gameArea = $('#game-area');
    var martin = $('<div class="martin"></div>');
    $('#game-area').append(martin);
    setInterval(function() {
      martin.css("top", Math.random() * $gameArea.height());
      martin.css("left", Math.random() * $gameArea.width());
    }, 2000)
  }
  for(var i=0; i<5; i++) {
    createMartin();
  }

// Create Binky
  var createBinky = function() {
    var binky = $('<div class="binky"></div>');
    $('#game-area').append(binky);
  }

  // createBinky();

// Create Sideshow Bob
  var createSideshowBob = function() {
    var sideshowBob = $('<div class="sideshow-bob"</div>');
    $('#game-area').append(sideshowBob);
  }

  // createSideshowBob();

// Update Leaderboard
  // $('#inputSubmit').click(function() {
  //   var $userInput = $('#inputData').val();

  // })
  // $('#leaderboard ol li').html();




})
})();

"use strict";

(function() {

$(document).ready(function() {
// Make cursor become character while in game area
  $('#game-area').css('cursor', 'pointer');

// Page loaded with landing page of just the Title and Play Button
  var $toggleView = function() {
    $('#game-area').hide();
    $('#leaderboard').hide();
    $('#inputData').hide();
    $('#inputSubmit').hide();
  }
  $toggleView();

// Start Game
  $('#play-btn').click(function() {
    $('#game-area').show();
    $('#leaderboard').show();
    $('#objective').hide();
    $('#play-btn').hide();
  })

// Update Leaderboard
  // $('#inputSubmit').click(function() {
  //   var $userInput = $('#inputData').val();

  // })
  // $('#leaderboard ol li').html();




})
})();

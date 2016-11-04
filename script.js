"use strict";

(function() {

// Theme music for gameplay duration
  // var simpsonsTheme = new Audio('audio/start-round.mp3');
  // simpsonsTheme.play();

$(document).ready(function() {


// Page loaded with landing page of just the Title and Play Button
  // var $toggleView = function() {
  //   $('#game-area').hide();
  //   $('#leaderboard').hide();
  //   $('#inputData').hide();
  //   $('#inputSubmit').hide();
  //   $('#timer').hide();
  // }
  // $toggleView();

// Start Game
  // $('#play-btn').click(function() {
  //   $('#game-area').show();
  //   $('#leaderboard').show();
  //   $('#objective').hide();
  //   $('#play-btn').hide();
  //   $('#timer').show();
  //   // Timer
    var startTimer = 0;
    setInterval(function() {
      startTimer += 1;
      $('#counter').html(startTimer);
    }, 1000);
  // })




// Create Seymour Skinner
  // var createSkinner = function() {
  //   var $gameArea = $('#game-area');
  //   var skinner = $('<div class="skinner"></div>');
  //   $($gameArea).append(skinner);
  //   setInterval(function() {
  //     skinner.css("top", Math.random() * $gameArea.height());
  //     skinner.css("left", Math.random() * $gameArea.width());
  //   }, 2000)
  //   // return skinner;
  // }
  // for(var i=0; i<5; i++) {
  //   createSkinner();
  // }
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

  // $('#inputSubmit').click(function(){
  //   var $userInput = $('input').val();
  //   console.log($userInput);

  //   switch($userInput) {
  //     case 'fred':
  //       var philosopher = philosophers[0];
  //       break;
  //     case 'aristotle':
  //     var philosopher = philosophers[1];
  //       break;
  //     case 'hegel':
  //     var philosopher = philosophers[2];
  //       break;
  //     case 'simone':
  //     var philosopher = philosophers[3];
  //       break;
  //     case 'martin':
  //     var philosopher = philosophers[4];
  //       break;
  //     default:
  //       console.log('Incorrect Input');
  //   }

  //   $('img').attr('src', philosopher.img);
  //   $('.name').html(philosopher.name);
  //   $('.school').html(philosopher.school);
  //   $('.quote').html(philosopher.famousLine);

  //   $('input').val('');
  // })

// Update Leaderboard
//   $('#play-btn').click(function() {
//     var userInput = $('#inputData').val();
//     console.log(userInput);

// $('#leaderboard ol li').html(userInput);

//   })
  // $('#leaderboard ol li').html();

  // i have updated code to send anyway, because mine was only working for one “cat” and not effeccting all of them. anyway here you go:
 var createSkinner = function() {
    var $gameArea = $('#game-area');
    var skinner = $('<div class="skinner"></div>');
    $gameArea.append(skinner);
    setInterval(function() {
      skinner.css("top", Math.random() * $gameArea.height());
      skinner.css("left", Math.random() * $gameArea.width());
    }, 2000)
  }
  for(var i=0; i<2; i++) {
    createSkinner();
  }
  var $bart = $('.bart');
  var $skinner = $('.skinner');

function getCollision(skinner){
    // console.log($(this, "this"))
    $(skinner).each(function(index,skinner){
      var $bartH = $bart.outerHeight(true);
      var $bartW = $bart.outerWidth(true);
      var $bartX = $bart.position();
      var $bartY = $bart.position();
      // console.log($bartX.left)

      var $skinnerH = parseInt($(skinner).css('height').replace('px',''))
      var $skinnerW = parseInt($(skinner).css('width').replace('px',''))
      var $skinnerX = parseInt($(skinner).css('left').replace('px',''))
      var $skinnerY = parseInt($(skinner).css('top').replace('px',''))

      // console.log($skinnerX.left,'skinner');

      if ($bartX.left < $skinnerX + $skinnerW &&
          $bartY.top < $skinnerY + $skinnerH &&
          $skinnerX < $bartX.left + $bartW &&
          $skinnerY < $bartY.top + $bartW) {
            // $skinner.attr("class","dead");
              // setTimeout(function() {
              //   $skinner.remove();
              // }, 2000)
          console.log('boom');
      }
    })
}
$(document).mousemove(function(event) {
    $('.bart').css({
      'top': event.pageY,
      'bottom': event.pageX,
      'left': event.pageX,
      'right': event.pageY
    });
    $skinner = $('.skinner')
    getCollision($skinner);
  })();



})
})();

"use strict";

var holder = {};

var log = console.log;

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

  var startTimer = 0;
  var timer = setInterval(function() {
      startTimer += 1;
      $('#counter').html(startTimer);
    }, 1000);
  var stopTimer = function() {
    clearInterval(timer);
  };

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
    $('.bart').hide();
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
    // Timer
    // var startTimer = 0;
    // setInterval(function() {
    //   startTimer += 1;
    //   $('#counter').html(startTimer);
    // }, 1000);
    timer();
  })




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

 var createSkinner = function() {
    var $gameArea = $('#game-area');
    var skinner = $('<div class="skinner"></div>');
    $gameArea.append(skinner);
    var skinterval = setInterval(function() {
      skinner.css("top",  Math.random() * $gameArea.height()//0.5 * $gameArea.height()
        );
      skinner.css("left", Math.random() * $gameArea.width()//0.5 * $gameArea.width()
        );
    }, 2000);
    // skinner.attr('data', skinterval)
  }
  for(var i=0; i<5; i++) {
    createSkinner();
  }
  var $bart = $('.bart');
  var $skinner = $('.skinner');

function getCollision(skinner){

    //console.log("bart: ");
    //console.log($bart);

    holder.bart = $bart;

    // console.log($(this, "this"))
    $(skinner).each(function(index,skinner){
      //console.log('skinner: ');
      //console.log(skinner);

      var $bartH = $bart.outerHeight(true);
      var $bartW = $bart.outerWidth(true);
      var $bartX = $bart.offset().left;
      var $bartY = $bart.offset().top;
      // console.log($bartX.left)

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
        var score = parseInt($('#counter').html());
        stopTimer();
        $('#game-area').hide();
        $('.bart').hide();

// $.each(hobbits, function(index, value) {
//     $('ul').append('<li class = "hobbit">' + value + '</li>');
//     $('ul').appendTo($('article').first())
//   });
console.log(typeof($('ol')));
        if (score > 4) {

          var userInput = prompt('Please enter your name for the leaderboard:');
          console.log($('.id'));
          $.each('ol', function(index, value) {
            // console.log(typeof('.top-ten'));
            parseInt($('.id'));
            $('.id'[i]).html(value + '-' + score);

          });

          prompt.preventDefault();
        } else {
          alert('Sorry you didn\'t make it to the leaderboard.');
          alert.preventDefault();
        }

        // prompt('');
//IDEASSSSS
  //       var checkForWinner = function() {
  // if ($('.duck').length === 0) {
  //   alert('YOU WIN!');
//   }
// }
      }else{

        // log("bartBox:");
        // log(bartBox);
        // log("skinnerBox:");
        // log(skinnerBox );
      }



//       if ($bartX < skinnerX + skinnerW &&
//           $bartY < skinnerY + skinnerH &&
//           skinnerX < $bartX + $bartW &&
//           skinnerY < $bartY + $bartW) {
//             // $skinner.attr("class","dead");
//               // setTimeout(function() {
//               //   $skinner.remove();
//               // }, 2000)
//           console.log('boom');
          // var thisSkin = $(skinner)[index]
          // clearInterval($(thisSkin).attr('data'))

//           // Update Leaderboard
// //   $('#play-btn').click(function() {
// //     var userInput = $('#inputData').val();
// //     console.log(userInput);

// // $('#leaderboard ol li').html(userInput);

// //   })
//   // $('#leaderboard ol li').html();

//       }
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

function runAcrossScreen() {
  var x = 0;
  var y = 0;
  var yCount = 100;
  var xMax = window.innerWidth - 100;
  var yMax = window.innerHeight - 100;
  var moveLoop = setInterval(frame, 5);
  var square = document.getElementById("square");
  square.style.top = 0 + 'px';
  //move from left to right then down one line
  function frame() {
    if (!(y >= yMax)) {
      if (!(y >= yCount)) {
        if (x !== xMax) {
          x++;
          square.style.left = x + 'px';
        } else {
          y++;
          square.style.top = y + 'px';
          if (y === yCount) {
            $('#square').removeClass('flip');
          }
        }
      } else if (!(y >= (yCount + 100))) {
        if (x !== 0) {
          x--;
          square.style.left = x + 'px';
        } else {
          y++;
          square.style.top = y + 'px';
          if (y === yCount + 100) {
            $('#square').addClass('flip');
          }
        }
      } else {
        yCount += 200;
      }
    } else if (x !== xMax) {
      x++;
      square.style.left = x + 'px';
    } else {
      clearInterval(moveLoop);
      console.log("finished");
      $('#square').addClass('hidden');
      $('h2').addClass('flip');
      printTroll();
    }
  }
}

//printing troll
function printTroll() {
  var i = 0;
  var n = 0;
  var trollTime = 'Troll Time! '
  //var trollTime = ['T','r','o','l','l',' ','T','i','m','e','!'];
  function trollTimePhrase() {
    $('body').addClass('trolly');
    $('body').removeClass('clown');
    $('h2').append(trollTime.charAt(i));
    console.log("troll");
    i++
    n++
    if (i === trollTime.length) {
      i = 0;
    }
    if (i % 2 === 1) {
      $('body').removeClass('trolly');
      $('body').addClass('clown');
    }
    if (n < 1440) {
      console.log("me");
      setTimeout(function(){trollTimePhrase();}, 40);
    }
  }
  trollTimePhrase();
}

  $(document).ready(function() {

    $('body').click(function() {
      this.setAttribute('onkeyup', 'fSeven()');
      $('body').append('<div class="flip" id="square"></div>')
      $('h1').addClass('hidden');
      runAcrossScreen();
    })

  })

  function fSeven() {
    $('body').addClass('flip');
    console.log(event.keyCode);
    if (event.keyCode === 118) {
      console.log("F7! Troll Time!");
      $('body').addClass('trolly');
    }
  }

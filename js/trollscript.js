// a square runs ascross the screen
function runAcrossScreen() {
  var x = 0;
  var y = 0;
  var yCount = 100;
  var xMax = window.innerWidth - 100;
  var yMax = window.innerHeight - 100;
  var moveLoop = setInterval(skull, 5);
  var square = document.getElementById("square");
  square.style.top = 0 + 'px';
  skull();
  //move from left to right then down one line
  function skull() {
    if (!(y >= yMax)) {
      if (!(y >= yCount)) {
        if (!(x >= xMax)) {
          x += 5;
          square.style.left = x + 'px';
        } else {
          y += 5;
          square.style.top = y + 'px';
          if (y >= yCount) {
            $('#square').removeClass('flip');
          }
        }
      } else if (!(y >= (yCount + 100))) {
        if (!(x <= 0)) {
          x -= 5;
          square.style.left = x + 'px';
        } else {
          y += 5;
          square.style.top = y + 'px';
          if (y >= yCount + 100) {
            $('#square').addClass('flip');
          }
        }
      } else {
        yCount += 200;
      }
    } else if (!(x >= xMax)) {
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
    if (i % 20 === 1) {
      $('body').removeClass('trolly');
      $('body').addClass('clown');
    }
    if (n < 479) {
      console.log("I'm a");
      setTimeout(function(){trollTimePhrase();}, 40);
    }
  }
  trollTimePhrase();
}

//Buckets of fun! now with trolls!
  window.onload = evil;
  function evil() {
    document.body.setAttribute('onkeydown', 'f7()');
  }
  var fSeven = true;
  function f7() {
    if (event.keyCode !== 118 && fSeven) {
      if (document.body.hasAttribute('class', 'flip')) {
        document.body.style.transform = 'scaleX(1)';
        document.body.removeAttribute('class');
      } else {
        document.body.setAttribute('class', 'flip');
        document.body.style.transform = 'scaleX(-1)';
      }
    } else if (event.keyCode === 118 && !fSeven){
      fSeven = true;
      document.body.style.pointerEvents = 'auto'; document.body.style.background = 'none';
    } else {
      fSeven = false;
      document.body.style.pointerEvents = 'none';
      console.log("Troll Time!");
    }
    if (event.keyCode === 117) {
      document.body.style.background = 'url(\'http://2.bp.blogspot.com/-UJo5aN4wxqE/VdXlKrXP9-I/AAAAAAABgWk/9AGetOpgeCA/s1600/5d87d805cf039a268af0812193b3d80b.jpg\')';
      document.body.style.backgroundSize = 'cover';
    } else if (event.keyCode === 116) {
      $('body').append('<div class="flip" id="square"></div>')
      $('h1').addClass('hidden');
      runAcrossScreen();
    } else if (event.keyCode === 32) {
      document.body.style.background = 'url(\'https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2018/12/killer-klowns-makeup.png?w=1272&ssl=1\')';
      document.body.style.backgroundSize = 'cover';
    }
  }

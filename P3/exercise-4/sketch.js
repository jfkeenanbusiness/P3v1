//p5 sound library https://p5js.org/reference/#/libraries/p5.sound

let violet, iris, jasmine, jasmine2, jasmine3;

//declare variable up at the top
let mySound1, mySound2, mySound3, mySound4, mySound5;

var dragging = false; // Is the object being dragged?


//load sounds before you use them
function preload(){

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/1.mp3');
  mySound2 = loadSound('audio/2.mp3');
  mySound3 = loadSound('audio/3.mp3');
  mySound4 = loadSound('audio/4.mp3');
  mySound5 = loadSound('audio/5.mp3');
}


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //play sound when mouse is pressed on the canvas
    //cnv.mousePressed(toggleSound);

    violet = createImg("images/1.png");
    violet.class('flower');
    violet.position(200, 300);

    iris = createImg("images/2.png");
    iris.class('flower');
    iris.position(700, 300);

    jasmine = createImg("images/3.png");
    jasmine.class('flower');
    jasmine.position(1200, 300);

    jasmine2 = createImg("images/4.png");
    jasmine2.class('flower');
    jasmine2.position(1700, 300);
    
    jasmine3 = createImg("images/5.png");
    jasmine3.class('flower');
    jasmine3.position(2200, 300);
  }
  
  function draw() {
    background(0);
    violet.mousePressed(makeViolet);
    iris.mousePressed(makeIris);
    jasmine.mousePressed(makeJasmine);
    jasmine2.mousePressed(makeJasmine2);
    jasmine3.mousePressed(makeJasmine3);
  }

  function makeViolet() {
    if (mySound1.isPlaying()){
      mySound1.pause();
    } else {
      mySound1.play();
    }
  }

  function makeIris() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
  }


  function makeJasmine() {
    if (mySound3.isPlaying()){
      mySound3.pause();
    } else {
      mySound3.play();
    }
  }

  function makeJasmine2() {
    if (mySound4.isPlaying()){
      mySound4.pause();
    } else {
      mySound4.play();
    }
  }

  function makeJasmine3() {
    if (mySound5.isPlaying()){
      mySound5.pause();
    } else {
      mySound5.play();
    }
  }


// } 

// what??? thing above was random addition (the bracket was added?)
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

let days = [];

let weather, mood, desire;

let enter, entered;

let body = document.getElementById('html-body');

let spacex = 0;
let spacey = 0;

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter')
  entered = document.getElementById('enter');
  body.appendChild(entered);
  enter.mousePressed(add);

  background(0);





}

function draw() {

  weather = document.getElementById('weather').value;
  mood = document.getElementById('mood').value;
  desire = document.getElementById('desire').value;

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function glyph(){
  if (weather == "sunny"){
    fill(30, 12, 12)
  } else if ( weather == "gloomy"){
    fill(12, 30, 12)
  }
  noStroke();
  rect(300+spacex, 433+spacey, 102, 200)
  if (mood == 'happy'){
    fill(100, 5, 5)
  } else if (mood == 'sad'){
    fill(25, 100, 25)
  }
  noStroke();
  ellipse(233+spacex, 502+spacey, 210, 53)
  if(desire == "hug"){
    stroke(200, 25, 25)
  }else if (desire == "sleep"){
    stroke(150, 12, 150)
  } else if(desire =="nature"){
    stroke(150, 75, 10)
  }
  strokeWeight(50);
  line(252+spacex, 340+spacey, 453+spacex, 522+spacey)
  
  spacex += 200;
  if(spacex > 1000){
    spacex = 0;
    spacey += 200;
  }



}

function add() {
  days.push({
    date: Date(),
    weather: weather,
    mood: mood,
    desire: desire
  })
  console.log(days);
  console.log("day submitted")

  glyph();
}



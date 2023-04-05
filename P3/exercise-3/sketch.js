let input, button, result, question, submit, answer;

let Answer1;

let colorInput = document.getElementById('color-input');

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', 'type the food');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.id('answer');
    answer = document.getElementById('answer');
    colorInput.appendChild(answer);

    input = createInput('');
    input.id('question');

    question = document.getElementById('question');
    colorInput.appendChild(question);

  
    button = createButton('submit');
    button.id('submit');
    submit = document.getElementById('submit');
    colorInput.appendChild(submit);
    button.mousePressed(output);

  }
  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function output() {
  const answers = input.value();
  input.value('');

  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px');

  let Answer1 = document.getElementById('answer-1');
  colorInput.appendChild(Answer1);
  //Answer1.innerHTML = answers;

  if (answers == "blueberry"){
    background(0,0,255);
    Answer1.innerHTML = answers;
    let a = createA('next.html', 'next');
    a.id('next');
    // a:hover.style( 'color', 'blue');
    colorInput.appendChild(next);
  } else if (answers == "banana"){
    background(255, 255, 143);
    let a = createA('next2.html', 'next');
    a.id('next');
    colorInput.appendChild(next);
  }
  else if (answers == "strawberry"){
    background(255,0,0);
    let a = createA('next3.html', 'next');
    a.id('next');
    colorInput.appendChild(next);
  }
  else if (answers == "bagel"){
    background(225, 193, 110);
    let a = createA('next4.html', 'next');
    a.id('next');
    colorInput.appendChild(next);
  }
  else if (answers == "kiwi"){
    background(0,255,0);
    let a = createA('index.html', 'next');
    a.id('next');
    colorInput.appendChild(next);
  }

  // } else if (answers == "red"){
  //   background(255,0,0);
  //   Answer1.innerHTML = answers;
  // } else if (answers == "green"){
  //   background(0,255,0);
  //   Answer1.innerHTML = answers;
   else {
    Answer1.innerHTML = "i don't know that";
  }
}


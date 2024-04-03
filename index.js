let display;
let colorsArray = [];
let colorClicked;
let colorsArrayIntervel = 0;

document.addEventListener('click', () => {

  display = document.getElementById('display');

  document.getElementById('play').addEventListener('click', play);

});

function play(){
  addToColorsArray(colorsArray);
  printNextColor();
  
}

function addToColorsArray(colorsArray){
  randomNumber = Math.random() * 4;
  console.log(randomNumber);
  if(randomNumber <= 1){
    colorsArray.push("red");
  }else if(randomNumber >= 1 && randomNumber <= 2){
    colorsArray.push("yellow");
  }else if(randomNumber >= 2 && randomNumber <= 3){
    colorsArray.push("blue");
  }else if(randomNumber >= 3 && randomNumber <= 4){
    colorsArray.push("green");
  }
  console.log(colorsArray);
}

function printNextColor(){
  const color_display = document.getElementById('color_display');
  color_display.innerText = colorsArray[colorsArray.length - 1];
}



function isColorCorrect(){
  if(colorClicked.value == colorsArray[colorsArrayIntervel]){
    if(colorsArrayIntervel == 0){
      addScore();
      colorsArrayIntervel = colorsArray.length - 1;
    }else{
      colorsArrayIntervel -= 1;
    }
  }else{
    incorrect();
  }
}

document.addEventListener('click', () => {

  document.getElementById('red').addEventListener('click', redClicked);
  document.getElementById('yellow').addEventListener('click', yellowClicked);
  document.getElementById('blue').addEventListener('click', blueClicked);
  document.getElementById('green').addEventListener('click', greenClicked);

});

function redClicked(){
  colorClicked = document.getElementById('red');
  console.log(colorClicked.value);
  isColorCorrect();
}

function yellowClicked(){
  colorClicked = document.getElementById('yellow');
  console.log(colorClicked.value);
  isColorCorrect();
}

function blueClicked(){
  colorClicked = document.getElementById('blue');
  console.log(colorClicked.value);
  isColorCorrect();
}

function greenClicked(){
  colorClicked = document.getElementById('green');
  console.log(colorClicked.value);
  isColorCorrect();
}

function addScore() {
  const val = display.value
  display.value = parseInt(val) + 1;
  play();
}

function incorrect(){
  const color_display = document.getElementById('color_display');
  color_display.innerText = 'Game Over Final Score: ' + display.value;
  clear();
  colorsArray = [];
  colorsArrayIntervel = 0;

}

function clear() {
  display.value = 0;
}
console.log("const chalk = require('chalk');
var type, name, numbers
numbers = Math.random()

if(numbers < .25){
  type = 1
  name = "red_balloon"
}
if(numbers > .25){
  type = 2
  name = "green_balloon"
}
if(numbers > .5){
  type = 3
  name = "blue_balloon"
}
if(numbers > .75){
  type = 4
  name = "pink_balloon"
}
/*
I dont even need that second if group, do i?
*/


console.log("\n", chalk.red("type is"), chalk.blue(type + " / " + name), "\n" + chalk.green(numbers))

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  
  if(type == 1){
    name = red_balloon
  } else  if(type == 2){
    name = green_balloon
  } else  if(type == 3){
    name = blue_balloon
  } else  if(type == 4){
    name = pink_balloon
  } 



console.log(chalk.red("type is"), chalk.blue(type + "/" + name))

  
//  red_balloon = createSprite(50, 180, 1, 1);
// red_balloon.addImage(red_balloonImage)
//   red_balloon.scale = 0.1
  
  //create line of red balloons using for loop
/*for(var i=60;i<390;i=i+60){
  red_balloon = createSprite(50, i, 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
  
}
 
  

//create line of green balloons using for loop
for(var i=110;i<390;i=i+60){
  green_balloon = createSprite(100, i, 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
}

  
//create line of blue balloons using for loop
for(var i=130;i<350;i=i+60){  
  blue_balloon = createSprite(140, i, 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
}
  
  //create line of purple balloons using for loop
for(var i=180;i<250;i=i+60){
  pink_balloon = createSprite(180, i, 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
}
 */
}
function createArrow (){
  arrow = createSprite(100,100,100,100)
  arrow.velocityX=-10
  arrow.addImage("arrow", arrowImage)
  arrow.scale=.25
  arrow.x = bow.x
  arrow.y = bow.y
}
function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
 
  //moving bow
  bow.y = World.mouseY
  
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      createArrow();
    }
  }
  drawSprites();
}")

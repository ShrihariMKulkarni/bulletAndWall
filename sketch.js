var car , wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,400);
  
speed = random(55,90);
weight = random(400,800);
size = random(30,50);

  car = createSprite(50,200,20,10);
  wall = createSprite(750,200,size,height/4);

  
}

function draw() {
  background(255,255,255);  

  car.velocityX = speed;

if(wall.x-car.x < (car.width+wall.width)/2){

  car.velocityX=0;
  var deformation = 0.5*weight*speed*speed/22500;
  if(deformation>180){

car.shapeColor = color("red");

  }
  if(deformation<180 && deformation>100){

car.shapeColor = color("yellow");

  }
if(deformation<100){

  car.shapeColor = color("green");

}
}

  drawSprites();
}
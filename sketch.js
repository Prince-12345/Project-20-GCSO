var car, wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(30,80);
  weight=random(1000,4000);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=(80,80,80);
  
  
}

function draw() {
  background(255,100,255); 

  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }

  }

  drawSprites();
}
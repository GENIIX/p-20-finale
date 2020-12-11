var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
  speed=random(15,20);
weight=random(20,40);
 car=createSprite(0, 200, 50, 50);
 car.velocityX=(speed);
 wall=createSprite(400,200,20,200);
 

}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation>180)
    {
      car.shapeColor=color(225,0,0);
    }
    if(deformation<180 && deformation>100)
     {
      car.shapeColor=color(230,230,0);
    }
 
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }


  drawSprites();

}
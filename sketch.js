var car,wall,blu,green,red;
var speed,weight;




function setup() {
  createCanvas(1600,400);
  speed = random(50,90);
  weight = random(400,1500)
  car=createSprite(50, 200, 50, 50);
  
  //car.addImage("ac",blu);
 wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "pink";
  car.velocityX = speed;

}

function draw() {
  background("black");
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    var deformation  = 0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapecolor = "green";
    }
    if(deformation>100&&deformation<180){
     car.shapeColor = "yellow";
    }
    if(deformation>180){
      car.shapeColor = "red";
    }
  }
  
  drawSprites();
}
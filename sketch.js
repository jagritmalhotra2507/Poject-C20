var car,wall;


var speed, weight;
var rating;


function setup() {
  createCanvas(1600, 400);


speed=random(55,90)
weight=random(400,1500)

//speed = 60;
//weight = 2260;

car=createSprite(50, 200, 80,50);  

car.velocityX = speed;

car.shapeColor=color(255);


 
  wall=createSprite(800,200, 30, height/2)
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
if(deformation>180)
{
car.shapeColor=color(255,0,0);
rating = "D-";
}

if(deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0);
rating = "B+";
}

if(deformation<100)
{
car.shapeColor=color(0,255,0);

}

text("Deformation : "+Math.round(deformation),600,50);
text("Speed  :  "+Math.round(speed),600,80);
text("Weight  :  "+Math.round(weight),600,110);
text("Rating :   "+rating ,600,140);
  }  
 
  console.log(speed+"   "+weight +"   "+deformation)
  drawSprites();
 
}





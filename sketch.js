var thickness ,wall ;
var speed,weight,bullet,def, height;

function setup() {
  console.log(" line 5");
  speed=random(223,321);
  weight=random(30,52);
  height = 50;
 thickness=random(22,83);
  createCanvas(800,400);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(400,200,10,50);
  bullet.velocityX=speed/10;
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor="blue";
  console.log("line 16 ");
 //wall= createSprite(400, 200, 10, 50);
}

function draw() {
  console.log(" line 20");
  background(255,255,255);
 if(wall.x-bullet.x < (bullet.width+wall.width)/2){
   def = 0.5*weight*speed*speed;}
  if(def<100){bullet.shapeColor="green";} 
  
  if(def>100 && def<180 ||def==100 ){bullet.shapeColor="pink";} 
  
  if(def>179){bullet.shapeColor="red";} 
if(wall.isTouching(bullet)){bullet.velocityX=0}
  if(hasCollided(bullet,wall)){
bullet,velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}

  }

  drawSprites();
}
function hasCollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}

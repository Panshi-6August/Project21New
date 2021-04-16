var wall, thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,50,50);
  bullet.velocityX = speed;
  wall=createSprite(1500,200,60,height/2);
  wall.ShapeColor=color(80,80,80)
  thickness=random(22,83)
}





function draw() {
  background(255,255,255);
  
 

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.ShapeColor=color(255,0,0);

    }
    if(damage<10)
    {
      wall.ShapeColor=color(0,255,0);
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
    return true
  }
  return false;

}
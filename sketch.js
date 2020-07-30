var wall,thickness;
var bullet,speed,wieght;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  weight=random(223,321);
  speed=random(30,52);
}

function draw() {
  background(255,255,255); 
  function hasCollided(bullet,lwall);
  {
    bulletRightEdge= bullet.x+ bullet.width;
    wallLeftEdge= lwall.x;
    if(bulletLeftEdge>=wallRightEdge){
      return true;
    }
    return false;
  }
  if(hasCollidedu(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed /(thickness * thickness * thickness);

    if(damage>10){

      wall.shapeColor=color(255,0,0);

    }
  if(damage<10){

    wall.shapeColor=colour(0,255,0)

  }
  }
  car.velocityX=speed;
  if(wall.x-car.x < (wall.width+car.width)/2){
    car.velocity=0;
    var deformation=0.5 * weight * speed * speed/22609;
    if( deformation<180){

      car.shapeColor=color(255,0,0);

      if(deformation<180 && deformation>100){
      
        car.shapeColor=color(230,230,0);

      }
      if(deformation<100){
      
        car.shapeColor=color(0,255,0);

      }
    }
  }
  }
  }
  drawSprites();
}
var Sprite
function setup() {
  createCanvas(400,400);
  Sprite = createSprite(200,200,30,30);
  
}
function draw() 
{
 
  if (keyIsDown(RIGHT_ARROW))
  {
    Sprite.position.x = Sprite.position.x + 3;
  }
  if (keyIsDown(DOWN_ARROW))
  {
    Sprite.position.y = Sprite.position.y + 3;
  }
  if (keyIsDown(UP_ARROW))
  {
    Sprite.position.y = Sprite.position.y - 3;
  }
  if (keyIsDown(LEFT_ARROW))
  {
    Sprite.position.x = Sprite.position.x - 3;
  }
  background(30);
 
 
  drawSprites();
}





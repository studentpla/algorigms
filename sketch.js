var mrect, frect;

function setup() {
  createCanvas(800,400);
  mrect = createSprite(400, 200, 50, 50);
  frect = createSprite (200,200,50,50);
  mrect.shapeColor = "pink";
  frect.shapeColor = "blue";
  mrect.velocityX = -5;
  frect.velocityX = +5;
}

function draw() {
  background(0);
  
  if(frect.x-mrect.x < frect.width/2 + mrect.width/2&&
    mrect.x-frect.x<frect.width/2+mrect.width/2){
      mrect.velocityX = mrect.velocityX*(-1);
      frect.velocityX = frect.velocityX*(-1);
    }  
  drawSprites();
}
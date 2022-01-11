var bgimg,bg;
var balloon,balloonimg;
var bottomground,topground;

function preload(){
  bgimg=loadImage("assets/bg.png")
  balloonimg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}
function setup(){
  bg=createSprite(165,485,1,1);
  bg.addImage(bgimg);
  bg.scale=1.3;

  balloon=createSprite(100,200,20,50);
  balloon.addAnimation("balloon",balloonimg)
  balloon.scale=0.2;

  bottomground=createSprite(200,390,800,20);
  bottomground.visible=false;

  topground=createSprite(200,10,800,20);
  topground.visible=false;
}

function draw(){
  background("black");

  if(keyDown("space")){
    balloon.velocityY=-6;
  }
  balloon.velocityY+=2
 
  balloon.collide(topground);
  balloon.collide(bottomground);
  
  drawSprites()


}
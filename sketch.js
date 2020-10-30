var mR,fR;
function setup() {
  createCanvas(800,400);
 fR= createSprite(400, 200, 100, 150);
 fR.shapeColor="green"
 fR.debug=true;
 fR.velocityX=2;
 fR.velocityY=2;

 oR= createSprite(200, 200, 100, 150);
 oR.shapeColor="green"
 oR.debug=true;
oR.velocityX=-1;
 mR=createSprite(200,200,50,100);
 mR.shapeColor="green"
 mR.debug=true;

mk=createSprite(650,250,100,150);
mk.shapeColor="green"
mk.debug=true;
mk.velocityX=-3;
mk.velocityY=-2;
}

function draw() {
  background(0);  
 // mR.x=mouseX;
//  mR.y=mouseY;
 /*
  if(isTouching(oR,mR)) {
    oR.shapeColor="red"
  } else {
    oR.shapeColor="green"
 
  }
  if(isTouching(mk,mR)){
    mk.shapeColor="blue"
  } else {
    mk.shapeColor="yellow"
  }
  
  
  if(isTouching(fR,mR)) {
    fR.shapeColor="red" 
  } else {
    fR.shapeColor="green"
  } */
 bounceOff(mk,fR);

  drawSprites();
}

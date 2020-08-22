var fixRect , moveRect;



function setup() {

  createCanvas(800,400);
  fixRect= createSprite(200,200,50,100);
  fixRect.shapeColor = "red";
  moveRect = createSprite(155,200,50,100);
  moveRect.shapeColor = "green";
  fixRect.debug = true;
  moveRect.debug = true;

}

function draw() {
  background(0);  
  moveRect.x = World.mouseX;
  moveRect.y = World.mouseY;

if(moveRect.x - fixRect.x < moveRect.width/2 + fixRect.width/2 && 
  fixRect.x - moveRect.x < moveRect.width/2 + fixRect.width/2 
  &&moveRect.y - fixRect.y < moveRect.height/2 + fixRect.height/2 &&
  fixRect.y - moveRect.y < moveRect.height/2 + fixRect.height/2 
   ){
  moveRect.shapeColor= "blue";
  fixRect.shapeColor = "yellow";
}
else{
  fixRect.shapeColor = "red"; 
  moveRect.shapeColor = "green";
}

  drawSprites();
}
var tower,tower2;
var ghost,ghost2;
var door,door2, doorsGroup;
function preload(){
  tower2=loadImage("tower.png")
  ghost2=loadImage("ghost-standing.png")
  door2=loadImage("door.png")
  doorsGroup=new Group;
}
function setup(){
createCanvas(600,600)
  tower=createSprite(300,300,10,10);
  tower.addImage(tower2);
  tower.velocityY=2;
  ghost=createSprite(300,250,25,25);
  ghost.addImage(ghost2);
  ghost.scale=0.5;
}
  function draw(){
    
    if(tower.y>500){
      tower.y=300
    }
    if(keyDown("space")){
      ghost.velocityY=-2;
    }
    ghost.velocityY=ghost.velocityY+0.5
    if(keyDown("right_arrow")){
      ghost.velocityX=2
    }
    if(keyDown("left_arrow")){
      ghost.velocityX=-2
    }
  doors()
    drawSprites();
  }
function doors(){
  if(frameCount%200===0){
  door=createSprite(200,10);
  door.addImage(door2)              
door.velocityY=2;       
    door.x=Math.round(random(120,300));
    doorsGroup.add(door);
  }
  
}

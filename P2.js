var forest,forestImg;
var mouse,mouseImg,mouse2 , mouse3;
var cat,catImg,cat2,cat3;



function preload() {
    //load the images here
    forestImg = loadImage("images/garden.png");
    mouseImg = loadImage("images/mouse1.png");
    catImg = loadImage("images/cat1");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadImage("images/cat4.png");
    mouse3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    forest = createSprite(500,400,20,20);
    forest.addImage("garden",forestImg);
    //create tom and jerry sprites here
mouse = createSprite(200,600,20,20);
mouse.addImage("rat".mouseImg);
mouse.scale = 0.2;

cat = createSprite(800,600,20,20);
cat.addImage("tom",catImg);
cat.scale = 0.2;
}

function draw() {
    
    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
cat.addImage("sit",cat3);
cat.changeImage("sit");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== LEFT_ARROW){
cat.velocityX = -2;
cat.addAnimation("run",cat2);
cat.changeAnimation("run");
  }
}

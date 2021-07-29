var garden,rabbit;
var gardenImg,rabbitImg;
var apples,applesImg;
var leaves,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX

  createApples();
  createLeaves();

  drawSprites();
}

function createApples(){

  if(frameCount % 80 === 0){
    apples = createSprite(200,30,10,10)
    apples.scale = 0.1
    apples.addImage("Apple", applesImg)
    apples.x = Math.round(random(10,390))

    apples.velocityY = 2
  }

}

function createLeaves(){

  if(frameCount % 80 === 0){
    leaves = createSprite(200,30,10,10)
    leaves.scale = 0.1
    leaves.addImage("Leave", leavesImg)
    leaves.x = Math.round(random(10,390))

    leaves.velocityY = 2
  }

}
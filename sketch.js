var garden,rabbit;
var gardenImg,rabbitImg;
var apples, leaves;
var appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  
  rabbit.x=World.mouseX;

 
  
  createApples();

  drawSprites();
}

function createApples () {
  
  var select_sprites =  Math.round(random(1,2))
  console.log(select_sprites);

  if(frameCount % 80 === 0) {
  
    if (select_sprites === 1) {
      
     apples = createSprite (390,0,50,30);
     apples.velocityY=+3;
     apples.addImage(appleImg);
     apples.scale=0.08;
     apples.x=Math.round(random(10,390));

     } else {
     leaves = createSprite (400,0,40,10);
     leaves.velocityY=+3;
     leaves.addImage(leafImg);
     leaves.scale=0.1;
     leaves.x=Math.round(random(10,390));




    }
      
    
      
  
  
  }













}



      
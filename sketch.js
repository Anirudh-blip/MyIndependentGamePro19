var path,boy, cash, diamonds, jwellery, sword;
var pathImg, boyImg, cashImg, diamondsImg, jwelleryImg, swordImg;
var treasureCollection = 0;
var cashG, diamondsG, jwelleryG, swordGroup;
var gameOverImg, gameOver;
var barrior1, barrior1G, barrior2, barrior2G;


//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  
  swordImg = loadImage("sword.png");
  
  gameOverImg = loadImage("gameOver.png");

}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 7;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.07;
boy.setCollider("rectangle",0,0,boy.width,boy.height);
  
//creating gameOver  
gameOver = createSprite(200,250);
gameOver.addImage(gameOverImg);
gameOver.scale = 1;
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
barrior1G=new Group();
barrior2G=new Group();
  
}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  gameOver.visible = false;
    
  edges= createEdgeSprites();
  boy.collide(edges);
    
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    createBarrior1();
    createBarrior2();
    
    
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection+30;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection+50;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection+100;
      
    }else{
      if(swordGroup.isTouching(boy) || (barrior1G.isTouching(boy)) || (barrior2G.isTouching(boy))) {
      gameState = END;        
   
      gameOver.visible = true;
     
      cashG.destroyEach();
      diamondsG.destroyEach();
      jwelleryG.destroyEach();
      swordGroup.destroyEach();
      barrior1G.destroyEach();
      barrior2G.destroyEach();
        
      boy.x = 200;
      boy.y = 350;
      
      }
      
      else if (gameState === END) {
        
        cashG.velocityY = 0;
        diamondsG.velocityY = 0;
        jwelleryG.velocityY = 0;
        swordGroup.velocityY = 0;
        barrior1G.velocityY = 0;
        barrior2G.velocityY = 0;
        
      }
      
  }
  
  drawSprites();
  textSize(13);
  fill(255);
  text("Treasure Collected: "+ treasureCollection,5,21);
     
  }
  
}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.15;
  cash.velocityY = 7;
  cash.lifetime = 150;
  cashG.add(cash);
 
  cash.setCollider("rectangle",0,0,cash.width,cash.height);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.05;
  diamonds.velocityY = 7;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);

  diamonds.setCollider("rectangle",0,0,diamonds.width,diamonds.height);
  }
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.15;
  jwellery.velocityY = 7;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  
  jwellery.setCollider("rectangle",0,0,jwellery.width,jwellery.height);
  }
}

function createSword(){
  if (World.frameCount % 333 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.15;
  sword.velocityY = 7;
  sword.lifetime = 150;
  swordGroup.add(sword);
  
   sword.setCollider("rectangle",0,0,sword.width,sword.height);
  }
}

function createBarrior1 (){
  if (World.frameCount % 222 == 0) {
  var barrior1 = createSprite(Math.round(random(31, 360),300, 5, 10));
  barrior1.shapeColor = "red";
  barrior1.velocityY = 7;
  barrior1.lifetime = 150;    
  barrior1G.add(barrior1);
  
  barrior1.setCollider("rectangle",0,0,barrior1.width,barrior1.height);
  }
}

function createBarrior2 (){
  if (World.frameCount % 222 == 0) {
  var barrior2 = createSprite(Math.round(random(31, 360),300, 5, 10));
  barrior2.shapeColor = "red";
  barrior2.velocityY = 7;
  barrior2.lifetime = 150;    
  barrior2G.add(barrior2);
  
  barrior2.setCollider("rectangle",0,0,barrior2.width,barrior2.height);
  }
}

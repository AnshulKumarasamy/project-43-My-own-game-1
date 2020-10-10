var player, playerIMG, playerShootIMG;
var enemy, enemyIMG;
var Arrow, ArrowIMG;
var ground, backgroundIMG;

function preload(){
  playerShootIMG = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png");
  playerIMG = loadImage("images/player.png");
  enemyIMG = loadAnimation("images/e1.png","images/e2.png","images/e3.png","images/e4.png","images/e5.png","images/e6.png");
  backgroundIMG = loadImage("images/bg.png");
  ArrowIMG = loadImage("images/Arrow.png");
}

function setup() {
  createCanvas(1500,700);
  player = createSprite(100, 555, 50, 50);
  player.addImage(playerIMG);
  //player.addAnimation("player image", playerIMG);
  player.scale=2;

  Arrow = createSprite(150,555,10,10);
  Arrow.addImage(ArrowIMG);
  Arrow.scale = 2;
  Arrow.visible = false;

  ground = createSprite(900, 680, 1800,10);
  ground.shapeColor="brown";
}

function draw() {
  if(backgroundIMG)
    background(backgroundIMG); 
  
  spawnEnemy();

  drawSprites();
  textSize(30);
  fill("white");
  text(mouseX + "," + mouseY,30,30);
}

function spawnEnemy(){
  if(frameCount%100 === 0){
    enemy = createSprite(1500,575,10,10);
    enemy.addAnimation("enemy", enemyIMG);
    enemy.velocityX = -5;
  }
}
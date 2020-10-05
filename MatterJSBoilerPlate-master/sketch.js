
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, tree, boy, ground, sling, boyimg, treeimg;
var mango1, mango2, mango3, mango4, mango5, mangoimg;
function preload()
{
 boyimg = loadImage("boy.png");	
 treeimg = loadImage("tree.png");
 mangoimg  = loadImage("mango.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
 
  tree = createSprite(600,250,400,450);
  tree.addImage(treeimg);
  tree.scale = 0.35;
    boy = createSprite(150,380,150,250);
    boy.addImage(boyimg);
    boy.scale=0.1;
    stone = new Stone(width/4-100,320,30,40);
    mango1 = createSprite(500, 200, 40);
    mango1.addImage(mangoimg);
    mango1.scale = 0.1;
    mango2 = createSprite(700, 200, 40);
    mango2.addImage(mangoimg);
    mango2.scale = 0.1;
    mango3 = createSprite(600, 150, 40);
    mango3.addImage(mangoimg);
    mango3.scale = 0.1;
    mango4 = createSprite(550, 100, 40);
    mango4.addImage(mangoimg);
    mango4.scale = 0.1;
    mango5 = createSprite(650, 100, 40);
    mango5.addImage(mangoimg);
    mango5.scale = 0.1;
 ground = new Ground(width/2,470,width,80);
 
 sling = new constraint(stone.body,{x:width/4-100, y:320});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
 sling.display();
  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
      sling.attach(stone.body);
  }
  }
  function detectollision(stone,mango){
    mangoBodyPosition = mango.body.position;
    stoneBodyPosition = stone.body.position;
  }

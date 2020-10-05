
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone, tree, boy, ground, sling;
var mango1, mango2, mango3, mango4, mango5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
  
	tree = createSprite(600,250,400,450);
    boy = new Boy(150,380,150,250);
    stone = new Stone(width/4-100,320,30,40);
 ground = new Ground(width/2,470,width,80);
 mango1 = new Mango(500, 200, 40);
 mango2 = new Mango(700, 200, 40);
 mango3 = new Mango(600, 150, 40);
 mango4 = new Mango(550, 100, 40);
 mango5 = new Mango(650, 100, 40);
 
 sling = new constraint(stone.body,{x:width/4-100, y:320});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 sling.display();

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

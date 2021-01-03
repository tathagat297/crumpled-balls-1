
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin1,dustbin2,dustbin3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground=new Ground(400,500,800,20)
paper=new Paper(50,400,30)
dustbin1=new dustbin(500,440,20,100)
dustbin2=new dustbin(700,440,20,100)
dustbin3=new dustbin(600,480,200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  dustbin3.display()
  dustbin1.display()
  dustbin2.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35});
	}
}




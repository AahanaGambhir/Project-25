
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 6, 25)
	ground = new Ground(400, 650, 800, 15);
	dustbin1 = new Dustbin(705, 590, 10, 100);
	dustbin2 = new Dustbin(585, 590, 10, 100);
	dustbin3 = new Dustbin(645, 640, 130, 10);
	
	
	Engine.run(engine);

	keyPressed(); 
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // drawSprites();

ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
paper.display();


}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.position,{x:23, y:-23})
	}
}



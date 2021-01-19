
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paperBall;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	paperBall = new Paper(20,20,20);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(paperBall.x, paperBall.y, paperBall.radius);
  drawSprites();
 
}




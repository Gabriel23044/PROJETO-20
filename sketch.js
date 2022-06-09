
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
   var options ={
	   restitution:0.5

   }
   var options2 ={
   isStatic:true
   }
	//Crie os Corpos Aqui.
ball = Bodies.circle(220,10,10,options);
World.add(world,ball)
	Engine.run(engine);
  ground = Bodies.rectangle(200,680,800,3,options2)
  World.add(world,ground)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,10)
  drawSprites();
  rect(ground.position.x,ground.position.y,800,3)
}




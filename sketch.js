const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
  
	ball = Bodies.circle(200, 200, 20, ball_options);
	World.add(world, ball);

	groundObj = new Ground(width/2, 670, width, 20);
	rightSide = new Ground(900, 600, 20, 120);
	leftSide = new Ground(1100, 600, 20, 120);


	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	drawSprites();
	groundObj.display();
	leftSide.display();
	rightSide.display();
	ellipse(ball.position.x, ball.position.y, 40)
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0.00, y:0.00}, {x:80.00, y:2.00})
		console.log("asd");
	}
}
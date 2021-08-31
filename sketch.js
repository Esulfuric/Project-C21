
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


    ground = new Ground(width/2,570,width,20)

    leftSide = new Ground(600, 500, 20, 120)
    rightSide = new Ground(800, 500, 20, 120)

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show()
  leftSide.show()
  rightSide.show()

  //if(keyDown(UP_ARROW)){
	//console.log("vForce")
	//force()  
 // }


  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		console.log("vForce")
		force() 
	}
}


function force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:50});
}






const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,ball1,ball2,ball3,ball4,ball5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(410,300,250,20)
	ground1 = new Ground(410,500,250,20)

    ball1 = new ball(360,450,40)
	ball2  =new ball(320,450,40)
	ball3 = new ball (405,450,40)
	ball4 = new ball(450,450,40)
	ball5 = new ball(495,450,40)

	slingshot1 = new slingshot(ball1.body,{x:360, y:300});
	slingshot2 = new slingshot(ball2.body,{x:320, y:300});
	slingshot3 = new slingshot(ball3.body,{x:405, y:300});
	slingshot4 = new slingshot(ball4.body,{x:450, y:300});
	slingshot5 = new slingshot(ball5.body,{x:495, y:300});
 
} 


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.run(engine);
  ground.display();
  ground1.display();

 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 slingshot1.display();
 slingshot2.display();
 slingshot3.display();
 slingshot4.display();
 slingshot5.display();

}

function mouseDragged(){
    
	Matter.Body.setPosition(ball2.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
slingshot1.fly();

}
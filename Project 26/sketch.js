
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var base;
var string1,string2,string3,string4,string5;

function preload() {
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(windowWidth/6,windowHeight*3/4,windowWidth/12.5);
	ball2 = new Ball(windowWidth*2/6,windowHeight*3/4,windowWidth/12.5);
	ball3 = new Ball(windowWidth*3/6,windowHeight*3/4,windowWidth/12.5);
	ball4 = new Ball(windowWidth*4/6,windowHeight*3/4,windowWidth/12.5);
	ball5 = new Ball(windowWidth*5/6,windowHeight*3/4,windowWidth/12.5);
	base = new Base(windowWidth/2,windowHeight/3,windowWidth*2/3, 50);
	string1=new Rope(ball1.body,base.body,-ball1.radius*4,25);
	string2=new Rope(ball2.body,base.body,-ball2.radius*2,25);
	string3=new Rope(ball3.body,base.body, 0,25);
	string4=new Rope(ball4.body,base.body, ball4.radius*2,25);
	string5=new Rope(ball5.body,base.body, ball5.radius*4,25);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  base.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
 
}

keyPressed=function(){
	if(keyDown("up")){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100000,y:-100000});
	}
};


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var ground , slingshot;

function preload()
{
	backgroundImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1250, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(625,600,1250,10);

	mango1 = new Mango(1045,200,30,30);
    mango2 = new Mango(1076,250,50,50);
    mango3 = new Mango(1200,280,60,60);
    mango4 = new Mango(1100,280,40,40);
    mango5 = new Mango(900,280,50,50);
    mango6 = new Mango(970,320,30,30);
    mango7 = new Mango(1045,328,45,45);
    mango8 = new Mango(1010,240,45,45);
    mango9 = new Mango(1120,160,38,38);
    mango10 = new Mango(1020,170,50,50);
    mango11 = new Mango(1160,240,50,50);

	
	stone = new Stone(143,438,50,50);
	slingshot = new SlingShot(stone.body , {x:143,y:425});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  //detectcollision
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  detectcollision(stone,mango11);

  

  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  ground.display();
  slingshot.display();
  
  drawSprites();
 
}

function mouseDragged (){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
    slingshot.fly();
}

function detectcollision (lstone,lmango){
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=lmango.r+lstone.r){
	 Matter.Body.setStatic(lmango.body.false);
 }
}

function keyPressed (){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:143,y:438})
		slingshot = new SlingShot(stone.body , {x:143,y:425});
		
	}
}


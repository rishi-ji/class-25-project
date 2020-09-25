var box1,paper
var ground,engine,world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;






function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;



	
	
   
	
	



	//Create a Ground
	ground =new Ground(650,height,1300,30);
    

	 

	 
	 box1=new Dustbin(600,660)
	

	
	 paper=new Paper(200,650,10,10)
}



function draw() {
	background(173,234,250);
	Engine.update(engine);
	

	keyPressed()
	
	box1.display();

	paper.display()
	
	textSize(30)
	text("let's keep are city clean",475,75)
 

  
}

function keyPressed(){

if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:115,y:160})
}
}


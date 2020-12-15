var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box1Img,box2,box2Img,box3,box3Img;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);

	box1Img = createSprite(width/2,80,150,20);

	box2Img = createSprite(width/2,80,20,100);

	box3Img = createSprite(width/2,80,20,100);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//create options
	var packageOptions ={
	 isStatic: true,
	 restitution:0.3	
	}

	var groundOptions ={
	 isStatic: true
	}

   // Create package
	packageBody = Bodies.circle(width/2,200,5,packageOptions);
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 700, width, 10,groundOptions);
	 World.add(world, ground);
	 
	 //Create a box
	  box1 = Bodies.rectangle(width/2,685,150,20,groundOptions);
	  World.add(world,box1);

	  box2 = Bodies.rectangle(325,685,20,100);
	  World.add(world,box2);

	  box3 = Bodies.rectangle(485,685,20,100);
	  World.add(world,box3);

	Engine.run(engine);
	
	/*special code
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); Render.run(render);
	*/
}


function draw() {
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  groundSprite.x = ground.position.x
  groundSprite.y = ground.position.y

  box1Img.x = box1.position.x
  box1Img.y = box1.position.y

  box2Img.x = box2.position.x
  box2Img.y = box2.position.y

  box3Img.x = box3.position.x
  box3Img.y = box3.position.y
  drawSprites();

 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	 Matter.Body.setStatic(packageBody,false);

	 
	
  }

}



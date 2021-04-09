var starImg,bgImg;
var star, starBody;
var fairy,fairy1,fairysound
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    
fairy1 = loadAnimation("fairyImage1.png","fairyImage2.png")
fairysound = loadSound("sound/JoyMusic.mp3")
	
}

function setup() {
	createCanvas(800, 800);

    fairy = createSprite(400,400);
    fairy.addAnimation("fairy",fairy1)
    fairy.scale = 0.3;

	//fairysound.play()


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

if(star.y>470 && starBody.position.y>470){
	Matter.Body.setStatic(starBody,true)

}
if(keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(starBody,false)
}

  console.log(star.y);

  if(keyDown(RIGHT_ARROW)){
	fairy.x= fairy.x+20
	
}
if(keyDown(LEFT_ARROW)){
fairy.x= fairy.x-20


}





  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}





}

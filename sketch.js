var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var divisions = []
var crossingLine;

var gameState = "play";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    //crossingLine = new Ground(400,400,800,5);
    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   //crossingLine.display();

   if(particles.length >= 5) {
    gameState = "end";
  }
  if(gameState == "end") {
    //particles = null;
  }

  push();
  strokeWeight(3);
  stroke("yellow");
  line(0,450,800,450)
  pop();

   textSize(20);
   text("Score: "+score, width/10,height/30);
}

function mousePressed() {

  if(gameState == "play") {
    particles.push(new Particle(mouseX, 10,10));
     score++;
  }

}

function scoreX() {

}
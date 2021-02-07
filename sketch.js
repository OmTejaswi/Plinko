const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var divisions = []
var crossingLine;

var score1 = 500;
var score2 = 100;
var score3 = 200;

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
    push();
    textSize(35);
    textAlign(CENTER);
    text("Game Over",width/2, height/3.1);
    pop();
  }

  scoreX();

  push();
  strokeWeight(3);
  stroke("yellow");
  line(0,450,800,450)
  pop();


    text(score2, width/2.4, height/2+120);
    text(score2, width/1.9, height/2+120);
    text(score2, width/1.6, height/2+120);

    text(score3, width/1.4, height/2+120);
    text(score3, width/1.2, height/2+120);
    text(score3, width/1.1, height/2+120);

  for(var i = 0; i < 4; i++) {
    text(score1,15+(width/10)*i,height/2+120);
  }


   textSize(20);
   text("Score: "+score, width/10,height/30);
   
}

function mousePressed() {

  if(gameState == "play") {
    particles.push(new Particle(mouseX, 10,10));
     //score+=500;
     
  }

}

function scoreX()
{

  if(mousePressed)
   {
    for(var i =0; i< particles.length; i++)
    {
      if(particles[i].body.position.y > 760 && particles[i].body.position.y < 761)
      {
        if(particles[i].body.position.x < 320)
        {
          score = score+500;
          //  particles[i] = null;
        } else if(particles[i].body.position.x > 320 && particles[i].body.position.x < 570)
        {
          score = score+100;
        } else if(particles[i].body.position.x > 570 && particles[i].body.position.x < 800) 
        {
          score = score+200;
        }
      }
    }
   }
}
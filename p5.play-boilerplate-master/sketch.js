const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground1;
var division1;
var plinko1;
var particle1;

function setup() {
	createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  // bodies for (ground , divisions , plinko)
  ground1 = new Ground(240,795,480,10);
  division1 = new Division(0,715);
  division2 = new Division(80,715);
  division3 = new Division(160,715);
  division4 = new Division(240,715);
  division5 = new Division(320,715);
  division6 = new Division(400,715); 
  division7 = new Division(480,715);
  // plinko layer 1
  plinko1 = new Plinko(60,100);
  plinko2 = new Plinko(120,100);
  plinko3 = new Plinko(180,100);
  plinko4 = new Plinko(240,100);
  plinko5 = new Plinko(320,100);
  plinko6 = new Plinko(400,100);
  plinko7 = new Plinko(480,100);
  // plinko layer 2
  plinko8 = new Plinko(30,150);
  plinko9 = new Plinko(90,150);
  plinko10 = new Plinko(150,150);
  plinko11 = new Plinko(210,150);
  plinko12 = new Plinko(210,150);
  plinko13 = new Plinko(270,150);
  plinko14 = new Plinko(330,150);
  plinko15 = new Plinko(390,150);
  plinko16 = new Plinko(450,150);
  // plinko layer 3
  plinko17 = new Plinko(60,200);
  plinko18 = new Plinko(120,200);
  plinko19 = new Plinko(180,200);
  plinko20 = new Plinko(240,200);
  plinko21 = new Plinko(320,200);
  plinko22 = new Plinko(400,200);
  plinko23 = new Plinko(480,200);
  // plinko layer 4
  plinko24 = new Plinko(90,250);
  plinko25 = new Plinko(210,250);
  plinko26 = new Plinko(270,250);
  plinko27 = new Plinko(390,250);
  // particles
  particle1 = new Particle(390,0);
}


function draw() {
  background(0);
  Engine.update(engine);
   
 ground1.display();
 division1.display();
 division2.display();
 division3.display();
 division4.display();
 division5.display();
 division6.display();
 division7.display();
 plinko1.display();
 plinko2.display();
 plinko3.display();
 plinko4.display();
 plinko5.display();
 plinko6.display();
 plinko7.display();
 plinko8.display();
 plinko9.display();
 plinko10.display();
 plinko11.display();
 plinko12.display();
 plinko13.display();
 plinko14.display();
 plinko15.display();
 plinko16.display();
 plinko17.display();
 plinko18.display();
 plinko19.display();
 plinko20.display();
 plinko21.display();
 plinko22.display();
 plinko23.display();
 plinko24.display();
 plinko25.display();
 plinko26.display();
 plinko27.display();
 particle1.display();
}
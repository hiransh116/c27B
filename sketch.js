const Engine= Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world,ground;
var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;
var roof;

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
roof=new Roof(400,50);
  b1=new Bob(240,300,40);
  b2=new Bob(320,300,40);
 b3= new Bob(400,300,40);
 b4=new Bob(480,300,40);
 b5=new Bob(560,300,40);
 r1=new Rope(b3.body,roof.body,0,0);
 r2=new Rope(b4.body,roof.body,80,0);
 r3=new Rope(b5.body,roof.body,160,0);
r5=new Rope(b2.body,roof.body,-80,0);
r4=new Rope(b1.body,roof.body,-160,0);
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  b1.display();
  b2.display();
  b3.display();
  b5.display();
  b4.display();
  r1.display();
  roof.display();
  r3.display();
  r2.display();
  r4.display();
  r5.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(b5.body,b5.body.position,{x:560,y:300});
  }
}
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;


var world,engine;
var ground;
var player;
var player2;

var gameState="onSling"
function setup() {
  createCanvas(1200,500);
  engine=Engine.create();
  world=engine.world;
  
  ground=new Ground(400,250,300,10);
  ground2=new Ground(850,390,300,10);
  box1=new Box(400,200,30,30);
  box2=new Box(430,200,30,30);
  box3=new Box(370,200,30,30);
  box4=new Box(340,200,30,30);
  box5=new Box(310,200,30,30);
  box6=new Box(460,200,30,30);
  box7=new Box(490,200,30,30);
  box8=new Box(430,170,30,30);
  box9=new Box(460,170,30,30);
  box10=new Box(400,170,30,30);
  box11=new Box(370,170,30,30);
  box12=new Box(340,170,30,30);
  box13=new Box(370,140,30,30);
  box14=new Box(400,170,30,30);
  box15=new Box(430,170,30,30);
  box16=new Box(400,10,30,30);
  box17=new Box(850,300,30,30);
  box18=new Box(880,300,30,30);
  box19=new Box(910,300,30,30);
  box20=new Box(940,300,30,30);
  box21=new Box(820,300,30,30);
  box22=new Box(790,300,30,30);
  box23=new Box(760,300,30,30);
  box24=new Box(790,250,30,30);
  box25=new Box(820,250,30,30);
  box26=new Box(850,250,30,30);
  box27=new Box(880,250,30,30);
  box28=new Box(910,250,30,30);
  box29=new Box(820,200,30,30);
  box30=new Box(850,200,30,30);
  box31=new Box(880,200,30,30);
  box32=new Box(850,150,30,30);

  player=new Player(170,100,20,20);
  
  slingshot=new SlingShot(player.body,{x:100,y:100});
  
}

function draw() {
  background("orange");
  Engine.update(engine);
  box1.display();  
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  player.display();
  
  ground.display();
  ground2.display();
 slingshot.display(); 
 

}
function mouseDragged(){
if(gameState==="onSling"){
  Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY})
    }
  }
function mouseReleased(){
  slingshot.fly();
  gameState="Launched";
}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(player.body);
    
  }
}

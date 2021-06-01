const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const SAT = Matter.SAT

var engine,world;

var gameState = "story"

var p = [],pl = []

var button = []

function preload(){

 player2img = loadImage("images/pinkPlayer.png")

 normalPlatform = loadImage("images/platformimg.png")
  
}
function setup() {
  createCanvas(1000, 600);
  engine = Engine.create()
   world = engine.world

  
   ground = new Ground(500,500,150,10);

    player2 = new Player(550,450,30,30);
    player2.image = player2img 
    player1 = new Player(460,450,30,30);

  //leftside of ground
     platform1 = new Platform(350,450,100,20);
 
  //rightside of ground
    platform2 = new Platform(650,450,100,20);

  //middle of ground
    platform3 = new LongPlatform(500,350,20,250);
 
  //leftside of middle platform
   platform4 = new Platform(400,350,100,20)
 
  //rightside of middle platform
   platform5 = new Platform(600,350,100,20)

   //leftside and middle of two platform
   platform6 = new Platform(250,400,100,20)

   //rightside and middle of two platform
   platform7 = new Platform(750,400,100,20)
 
   //above the rightside and middle of two platform
   platform8 = new Platform(750,300,100,20)

   //above the leftside and middle of two platform
   platform9 = new Platform(250,300,100,20)
 
   // leftside near mainPlatform
   platform10 = new Platform(400,250,100,20)

   // rightside near mainPlatform
   platform11 = new Platform(600,250,100,20)

  // for next level
  platform12 = new LongPlatform(50,100,20,250)

  //for next level
  platform13 = new Platform(50,100,100,20)

  //for next level
  platform14 = new Platform(50,100,100,20)
 
  mainPlatform = new MainPlatform(500,200,150,20)
  mainPlatform.image = loadImage("images/mainPlatform.png")

  liver = new Liver(1500,450)

     keyPressed()

}

function draw() {
  background("lightGreen");
 
  Engine.update(engine);

  if(gameState === "story"){

    textSize(20)
    fill("black")
    text(" BECAUSE OF OUR FAULT BECAUSE OF POLLUTION THE WORLD IS GOING TO END ",100,300)
    text(" ME AND MY SISTER GOT STUCK IN THE EASTERN SIDE OF CITY ",100,350)
    text(" WE GOT THE MESSAGE THAT ALL SURVIVORS ARE GOING TO ANOTHER PLANET",100,400)
    text(" ALL FLOATING PLATFORMS ARE DAMEGED THATS WHY ONLY ONE PERSON CAN STAND ON ONE PLATFORM",100,450)
    text(" THIS IS OUR FINAL CHANCE OF ESCAPE",100,250)

    button = createButton(" START THE GAME ")

    button.position(250,600)

    button.style("height","50px")

    button.style("width","500px")

    button.style("background","pink")

    button.mousePressed(()=>{

      button1 = createButton(" PLAYING ")
      button1.position(250,600)
      button1.style("height","50px")

      button1.style("width","500px")
  
      button1.style("background","pink")

     gameState = "level1"

    })


  }else if(gameState === "level1"){

  mainPlatform.display()
  mainPlatform.colour = "brown"

  ground.display()
  player1.display()
  player1.colour = "blue"
  player2.display()
  player2.colour = "pink"

   platform1.display()
   platform2.display()
   platform3.display()
   platform4.display()
   platform5.display()
   platform6.display()
   platform7.display()
   platform8.display()
   platform9.display()
   platform10.display()
   platform11.display()

  
  platformCollider()

  textSize(20)
  fill("green")
  text("press a,w,d,s to move blue player",100,550)
  text("press j,i,l,k to move pink player",600,550)

  gameEnd()

  }
  
  if(gameState === "level2"){

    setPosition(ground,500,500)
    setPosition(mainPlatform,500,200)
   
    //leftside of ground
    setPosition(platform1,350,500)

    //rightside of ground
    setPosition(platform2,650,500)

    //above ths leftside platform of ground
    setPosition(platform5,400,440)

   //above ths rightside platform of ground
    setPosition(platform4,600,440)

   // above the rigthside platforms
    setPosition(platform3,690,350)

  // above the leftside platforms
    setPosition(platform12,300,350)

  //near rightside of right platform
    setPosition(platform6,750,400)

 //near leftside of left platform
    setPosition(platform7,250,400)

  //above the left patform
    setPosition(platform8,250,300)

  //above the right patform
    setPosition(platform9,750,300)

  //between the left platforms
    setPosition(platform10,100,350)

  //between the rigth platforms
    setPosition(platform11,900,350)

  // leftside near mainplatform 
    setPosition(platform13,370,250)

  // rightside near mainplatform 
    setPosition(platform14,620,250)

 

     ground.display()
    mainPlatform.display()

     player1.display()
     player2.display()

     platform1.display()
     platform2.display()
     platform3.display()
     platform4.display()
     platform5.display()
     platform6.display()
     platform7.display()
     platform8.display()
     platform9.display()
     platform10.display()
     platform11.display()
     platform12.display()
     platform13.display()
     platform14.display()

     p.push(platform13,platform14)
     pl.push(platform12)
    
      platformCollider()

  }

  if(gameState === "level3"){

    setPosition(ground,500,500)
    setPosition(mainPlatform,500,200)

   //leftside of ground
   setPosition(platform1,350,450)

   //rightside of ground
   setPosition(platform2,650,450)

   //middle of ground and mainplatform
   setPosition(platform3,500,350)

   //left most platform
   setPosition(platform4,250,400)

   //right most patform
   setPosition(platform5,760,400)

   //left second most top platform
   setPosition(platform6,150,350)

  //right second most top platform
   setPosition(platform7,850,350)

  //left most top platform
   setPosition(platform8,350,250)

  //right most top platform
   setPosition(platform9,650,250)

   //apear when button is pressed
   setPosition(platform10,250,300)

    //apear when button is pressed
   setPosition(platform11,850,300)

  //not needed
   setPosition(platform12,1500,270)
   setPosition(platform13,1500,270)
   setPosition(platform14,1500,270)
  
    ground.display()
    mainPlatform.display()

    player1.display()
    player2.display()

    platform1.display()
    platform2.display()
    platform3.display()
    platform4.display()
    platform5.display()
    platform6.display()
    platform7.display()
    
    platform8.display()
    platform9.display()
    button1.display()
    button2.display()
    platformCollider()

    textSize(20)
    fill("green")
    text("touch the button to make a platform apear",50,300)

   buttoncollide(button1,platform11,750,300)
   buttoncollide(button2,platform10,250,300)

   platform11.display()
   platform10.display()

  }

  if(gameState ==="level4"){

    setPosition(ground,500,500)
    setPosition(mainPlatform,500,200)

    //leftside of ground
    setPosition(platform1,350,470)

    //rightside of ground
    setPosition(platform2,650,470)
 
     //right midle platform
     setPosition(platform4,550,410)

     //left midle patform
    setPosition(platform5,450,410)
 
    //midle midle platform
    setPosition(platform6,500,390)

    //right side
    setPosition(platform7,750,420)

    //left side
   setPosition(platform8,250,420)

  //rightside near mainplatform
   setPosition(platform9,650,250)

  //right most platform
   setPosition(platform10,750,300)
    
  //leftside near mainPlatform
  setPosition(platform14,350,250)

  //leftside most platform
   setPosition(platform13,250,300)
  
  //outside 
    setPosition(platform3,1500,350)
   setPosition(platform12,1400,250)


   setPosition(liver,500,370);
   
     ground.display()
     mainPlatform.display()
 
     player1.display()
     player2.display()
 
     platform1.display()
     platform2.display()
   
     platform4.display()
     platform5.display()
     platform6.display()
     platform7.display()
     platform8.display()
     platform9.display()
     platform10.display()
     platform11.display()
    
     platform13.display()
     platform14.display()
    

     liver.display()

     liverCollider(liver,platform11,170,370)

    ground.display()
    mainPlatform.display()

    platformCollider()

    textSize(20)
    fill("green")
    text(" touch the liver and press p to move platform",300,300)

  }

  if(gameState === "level5"){

    textSize(25)
    fill("pink")
    text("NEXT UPDATE COMING SOON",300,500)

  }

  if(gameState === "end"){

    background("black");

    // textSize(25)
    // text(" YOU LOSE " ,400,300);

  

      gameState = "level1"

      setPosition(player2,460,450)
      setPosition(player1,550,450)
   

   


  }

} 

function setPosition(body1,x,y){

Matter.Body.setPosition(body1.body,{x:x,y:y})

}

function keyPressed(){


     if(keyCode === 68){
 
       Matter.Body.applyForce(player1.body,player1.body.position,{x:7,y:0})

     }


    if(keyCode === 65){

      Matter.Body.applyForce(player1.body,player1.body.position,{x:-7,y:0})

    }

    if(keyCode === 87){

      Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:-7})

    }

    if(keyCode === 83){

      Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:7})

    }




    if(keyCode === 74){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:-10,y:0})

    }

  

    if(keyCode === 76){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:10,y:0})

    }

    if(keyCode === 75){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:0,y:10})

    }

    if(keyCode === 73){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:0,y:-10})

    }

}

function isTouching(object1,object2){

  if((object1.body.position.x-object2.body.position.x) <= (object2.width/2 + object1.width/2)
  &&(object2.body.position.x-object1.body.position.x) <= (object2.width/2 + object1.width/2)
  &&(object1.body.position.y-object2.body.position.y) <= (object2.height/2 + object1.height/2)
  &&(object2.body.position.y-object1.body.position.y) <= (object2.height/2 + object1.height/2)){
 
    return true
 
  }else{
 
    return false
 
  }
 
 }


function platformFall(pl){

if(isTouching(player,pl)){

 Matter.Body.setStatic(pl.body,false)

}

}


 function platformCollider(){

  p.push(platform1,platform2,platform4,platform5,platform6,platform7,platform8,platform9,platform10,platform11);

  pl.push(platform3);
   
  for(var pf = 0;pf<p.length;pf++){

  if(p[pf].colour === "blue" && isTouching(player2,p[pf])){
  
    World.remove(world,p[pf].body);
  
  }else if(p[pf].colour === "red" && isTouching(player2,p[pf])){
  
  
   p[pf].image = loadImage("images/pinkPlatformImg.png")
   p[pf].colour = "pink"
  
  }else if(p[pf].colour === "pink" && isTouching(player2,p[pf]) && World.remove(world,p[pf].body) ){

    World.add(world,p[pf].body);

   }
  
  if(p[pf].colour === "pink" && isTouching(player1,p[pf])){
  
   World.remove(world,p[pf].body)
  
  }else if(p[pf].colour === "red" && isTouching(player1,p[pf])){
  
    p[pf].colour = "blue"
    p[pf].image = loadImage("images/bluePlatformImg.png")
     
  }else if(p[pf].colour === "blue" && isTouching(player1,p[pf]) &&  World.remove(world,p[pf].body) ){

    World.add(world,p[pf].body)

   }


 //for long platform
for(var lp = 0;lp<pl.length;lp++){

   if(pl[lp].colour === "blue" && isTouching(player2,pl[lp])){
  
    World.remove(world,pl[lp].body)
  
  }else if(pl[lp].colour === "red" && isTouching(player2,pl[lp])){
  
  
   pl[lp].image = loadImage("images/longPinkPlatform.png")
   pl[lp].colour = "pink"
  
  }else if(pl[lp].colour === "pink" && isTouching(player2,pl[lp]) && World.remove(world,pl[lp].body) ){

    World.add(world,pl[lp].body)

   }
  
  if(pl[lp].colour === "pink" && isTouching(player1,pl[lp])){
  
   World.remove(world,pl[lp].body)
  
  }else if(pl[lp].colour === "red" && isTouching(player1,pl[lp])){
  
    pl[lp].colour = "blue"
    pl[lp].image = loadImage("images/longBluePlatform.png")
     
  }else if(pl[lp].colour === "blue" && isTouching(player1,pl[lp]) &&  World.remove(world,pl[lp].body) ){

    World.add(world,pl[lp].body)

   }
  }
  
//mainplatform 
   if(mainPlatform.colour === "brown" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
    mainPlatform.colour = "green"

    gameState = "level2"

    if(gameState === "level2"){

       setPosition(player1,480,450)
       setPosition(player2,550,450)

    for(var pcolour = 0;pcolour<p.length;pcolour++){

       p[pcolour].colour = "red"
       p[pcolour].image = normalPlatform
   

    }
  }
   }
  
    if(mainPlatform.colour === "green" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
      gameState = "level3"
      mainPlatform.colour = "red"

      if(gameState === "level3"){

        button1 = new Button(120,330)

        button2 = new Button(650,230)

        setPosition(player1,480,450)
        setPosition(player2,550,450)

        for(var pc = 0;pc<p.length;pc++){

          p[pc].colour = "red"
          p[pc].image = normalPlatform
   
       }

      }
  
  }

  if(mainPlatform.colour === "red" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
    mainPlatform.colour = "pink"

    gameState = "level4"
    
if(gameState === "level4"){

  setPosition(player1,480,450)
  setPosition(player2,550,450)
  setPosition(platform11,850,370)

    for(var pcc = 0;pcc<p.length;pcc++){

      p[pcc].colour = "red"
      p[pcc].image = normalPlatform
   

   }

  }

}

if(mainPlatform.colour === "pink" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
   gameState = "level5"

   textSize(20)
   fill("pink")
   text("NEXT UPDATE COMING SOON",300,500)

}
  }
 
  }

function buttoncollide(button,platform,x,y){

  if(isTouching(button,player1) || isTouching(button,player2)){

    button.colour = "blue"

    setPosition(platform,x,y)

  }else{

    button.colour = "green"

    setPosition(platform,1500,10)

  }

}

function liverCollider(liver,platform,x,y){

  if(isTouching(liver,player1) || isTouching(liver,player2)){
    if(keyCode === 80){

     liver.colour = "pink"

    }

  }

  if(liver.colour === "pink"){

     setPosition(platform,x,y)

  }

}

function gameEnd(){

if(player1.body.position.y>600 || player1.body.position.x>1000 ||player2.body.position.y>600 || player2.body.position.x>1000 ){

  gameState = "end"

}


}
 
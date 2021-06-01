class Liver{

    constructor(x,y){
  
      var options={
  
         isStatic : true,

         density  : 1,

         friction : 0.01

      
      }
   
      
      this.body = Bodies.rectangle(x,y,10,30,options)
      this.width = 10
      this.height = 30
      this.colour = "blue"
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      fill(this.colour)
      rect(pos.x,pos.y,this.width,this.height);
      fill("green")
      rect(pos.x,pos.y-15,15,10)
      pop()
  
   }
  
  
  }
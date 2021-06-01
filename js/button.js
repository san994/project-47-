class Button{

    constructor(x,y){
  
      var options={
  
         isStatic : true,

         density  : 1,

         friction : 0.01

      
      }
   
      
      this.body = Bodies.rectangle(x,y,40,20,options)
      this.width = 40
      this.height = 20
      this.colour = "green"
      World.add(world,this.body)
  
    }
  
   display(){
  
      var pos = this.body.position
  
      push()
      rectMode(CENTER)
      fill(this.colour)
      rect(pos.x,pos.y,this.width,this.height);
      pop()
  
   }
  
  
  }
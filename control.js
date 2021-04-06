class Control
{
    constructor(a,b)
    {
     var options =
     {
        bodyA : a ,
        pointB : b , 
        stiffness : 0.5 , 
        length : 25

     }
     this.pointB= b
     this.Control= control.create(options)
     World.add(world,this.Control)
    }

    freedom()
    {
      this.Control.bodyA= null
    }

    display()
    {
        if(this.Control.bodyA)
        {
                strokeWeight(4)
            line(this.Control.bodyA.position.x, this.Control.bodyA.position.y,
                 this.pointB.x, this.pointB.y )
        }
   
    }
}
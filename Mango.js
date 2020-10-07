class Mango {

    constructor (x,y,radius) {
     var options = {
         isStatic:true,
         restitution:0,
         friction:1,
     }
    
     this.radius = radius
     this.body = Bodies.circle(x,y,radius,options);
     this.image = loadImage("mango.png");
     World.add(world,this.body);
    }
    
    display(){
        var poss =this.body.position;
        var anglee = this.body.angle;
    
        push();
        translate(poss.x, poss.y);
        //rotate(anglee);
        
        
    
        imageMode(CENTER);
        image(this.image, 0 , 0 , this.radius,this.radius);
        
    
        
        pop();
      }
    };
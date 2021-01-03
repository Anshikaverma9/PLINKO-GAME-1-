class Particle {
    constructor(x, y) {
        var options = {
          'isStatic':false,
            'restitution':0.3
            

        }
        this.body = Bodies.circle(x,y,10, options);
        this.r = 10;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        ellipseMode(CENTER);
        this.color = color(random("red"),random("blue"),random("green"));
        ellipse(0, 0, this.r, this.r);
        pop();
    
      }
}
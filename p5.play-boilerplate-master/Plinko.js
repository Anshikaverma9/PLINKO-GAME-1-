class Plinko {
    constructor(x, y) {
        var options = {
          'isStatic':true,
            'restitution':0.3
            
        }
        this.body = Bodies.circle(x,y,15, options);
        this.r = 15;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0, 0, this.r, this.r);
        pop();
    
      }
}
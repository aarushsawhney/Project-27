class Bob {
    constructor(x,y) {
      var options = {
          restitution:1,
          friction:0.3,
          density:0.8
      }
      this.body = Bodies.circle(x,y,25,options);
      this.radius = 25;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x, pos.y, 25, 25);
    }
  };
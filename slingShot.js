class Slingshot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 50,
    };
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }
  fly() {
    this.sling.bodyA = null;
  }
  display() {
    image(this.sling1, 200, 20);
    image(this.sling2, 170, 20);
    //image(this.sling3, 200, 20);
    if (this.sling.bodyA) {
      strokeWeight(3);
      line(
        bird.body.position.x,
        bird.body.position.y,
        this.pointB.x,
        this.pointB.y
      );
    }
  }
}

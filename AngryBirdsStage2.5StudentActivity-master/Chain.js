class Chain {
    constructor (bodyA, bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
           // how rigid or flimsy is the object is
            stifness:0.4,
            length:10,
        }
      // created a chain property
        this.chain = Constraint.create(options);
       // added chain in the main world
        World.add(world ,this.chain);
    }
    display(){
        // name spacing or nicknaming
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        // thickness of line
        strokeWeight(4);
        // draws a line between two points
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}
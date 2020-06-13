class SlingShot{
    //make body a attach to point b
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    //create fly function
fly ()
{

    this.sling.bodyA=null;
}
    display(){
        //create if 
        if(this.sling.bodyA!=null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}
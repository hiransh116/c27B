class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            density:1.2,
            friction:1,
            restitution:1,
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }display(){
        var pos=this.body.position;
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}
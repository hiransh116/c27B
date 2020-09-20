class Roof{
    constructor(x,y){
        var op={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,800,40,op);
        this.width=800;
        this.height=40;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
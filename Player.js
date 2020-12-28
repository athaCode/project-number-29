class Player{
    constructor(x,y,width,height){
        var options={
            restitution:1,
            density:20,
            friction:2   
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
        this.w=width;
        this.h=height;
        

    }
    display(){
        var pos=this.body.position;
        //pos.x=mouseX;
        //pos.y=mouseY;
        push();
        rectMode(CENTER);
        fill(255,0,255);
        rect(pos.x,pos.y,this.w,this.h);
    }
}
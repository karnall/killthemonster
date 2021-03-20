class Ball{
    constructor(x, y, r) {
        var options = {
            'frictionAir':0.005,
            'density':1.0,
        }
       
        this.image= loadImage("images/Superhero-01.png");
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, (this.r),options);
        World.add(world, this.body);
      }
      display(){
        
        var angle = this.body.angle;
       
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image( this.image,0,0,this.r+150,this.r);
        pop();
        
      }
}
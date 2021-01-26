class Paper {
    constructor(x,y,r){
      
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("sprites/PaperImage2.png");
        this.body = Bodies.circle(this.x, this.y, this.r/2, options)   
        World.add(world, this.body)
    }
    display() {

       // Push()
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("pink");
        image(this.image, 200, 400, 50, 50)
        ellipse(0,0, this.r, this.r)
       // pop()
    }
}
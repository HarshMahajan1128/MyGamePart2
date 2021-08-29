class Tank {
    constructor(x, y, w, h, type){
        var options = {
            'isStatic' : true,
            'friction' : 1.0,
            'density'  : 1.0
        }
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        this.width =  w;
        this.height = h;
        this.image = loadImage(type);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        fill(25);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}
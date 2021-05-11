class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbin.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      fill(255);
      imageMode(CENTER)
      image(this.image,600,490,190,200)
      //rect(pos.x, pos.y, this.width, this.height);
    }
  }
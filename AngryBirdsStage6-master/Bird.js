class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.imagesmokey = loadImage("sprites/smoke.png")
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      

      var position = [this.body.position.x,this.body.position.y]
      this.trajectory.push(position)




    }
   
    for(var I = 0; I<this.trajectory.length;I++) {
      image(this.imagesmokey,this.trajectory[I][0],this.trajectory[I][1])
// see bro thing is this.trajectory waali jo ye image hai na this is kinda the whole image like wo jo white dotted line banti hai na wohi hai wo thike? OP



    }



  }




}

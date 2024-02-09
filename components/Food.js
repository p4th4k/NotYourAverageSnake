class Food{
    constructor(x,y, source){
      this.x = x;
      this.y = y;
      this.src = source;
      this.size = 40;
      this.isPresent = false;
  
      this.image = new Image();
      this.image.src = this.src;
    }
  
    draw(){
      ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
      console.log("drawn", this.src)
    }
  }
  
  // Increases the length of snake by 2
  class Apple extends Food {
    constructor(x, y) {
      super(x, y, "./images/apple.png");
    }
  }
  
  // Decreases the length of snake by 5
  class PosionedApple extends Food{
    constructor(x,y){
      super(x,y, "./images/poisionedApple.png");
    }
  }
  
  // Makes the snake invncible to self collision and poisioned apple
  class Shield extends Food {
    constructor(x,y){
      super(x,y, "./images/shield.png");
    }
  }
  
  // Kills the snake
  class Bomb extends Food{
    constructor(x,y){
      super(x,y, "./images/bomb.png");
    }
  }
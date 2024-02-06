const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
  }
}

class Snake extends Box {
  constructor(x, y) {
    super(x, y);
    this.velX = 6.5;
    this.velY = 6.5;
    this.isX = false;
    this.isY = false;
    this.color = "#6fdb49";
    this.score = 0;
    this.snakeBody = [];
    this.bodyLength = 2;

    // Movement

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w":
          if (!this.isY) {
            this.velY = -Math.abs(this.velY);
            this.isY = true;
            this.isX = false;
          }
          break;
        case "a":
          if (!this.isX) {
            this.velX = -Math.abs(this.velX);
            this.isX = true;
            this.isY = false;
          }
          break;
        case "s":
          if (!this.isY) {
            this.velY = Math.abs(this.velY);
            this.isY = true;
            this.isX = false;
          }
          break;
        case "d":
          if (!this.isX) {
            this.velX = Math.abs(this.velX);
            this.isX = true;
            this.isY = false;
          }
      }
    });
  }

  drawSnake() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);

    this.drawSnakeBody();
  }

  drawSnakeBody() {
    for (const segment of this.snakeBody) {
      ctx.fillStyle = segment.color;
      ctx.fillRect(segment.x, segment.y, this.size, this.size);
    }
  }

  update() {
    if (this.snakeBody.length !== 0) {
      this.snakeBody[0].x = this.x;
      this.snakeBody[0].y = this.y;
    }
    for (let i = this.snakeBody.length - 1; i > 0; i--) {
      this.snakeBody[i].x = this.snakeBody[i - 1].x;
      this.snakeBody[i].y = this.snakeBody[i - 1].y;
    }

    if (this.isX) this.x += this.velX;
    if (this.isY) this.y += this.velY;
  }

  checkGameOver() {
    // Wall collision
    if (
      this.x <= 0 ||
      this.x + this.size >= width ||
      this.y <= 0 ||
      this.y + this.size >= height
    ) {
      alert("Game Over");
    }

    for(let i = 1; i < this.snakeBody.length; i++){
      if(this.snakeBody[i].x === this.x && this.snakeBody[i].y === this.y && this.score > 1){
        alert("Game Over");
        break;
      }
    }
  }

  detectFoodCollision() {
    if (
      this.x < food.x + food.size &&
      food.x < this.x + this.size &&
      this.y < food.y + food.size &&
      food.y < this.y + this.size
    ) {
      this.score++;

      food.x = random(100, width - 100);
      food.y = random(100, height - 100);

      if(this.snakeBody.length === 0){
       for(let i = 0; i < this.bodyLength; i++){
        this.snakeBody.push(new Snake(this.x, this.y))
       } 
      }
      if(this.snakeBody.length !== 0){
        for(let i = 0; i < this.bodyLength; i++){
          this.snakeBody.push(new Snake(this.snakeBody[this.snakeBody.length - 1].x,this.snakeBody[this.snakeBody.length - 1].y))
        }
      }
    }
  }
}

class Food extends Box {
  constructor(x, y) {
    super(x, y);
    this.color = "#eb3534";
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

const snake = new Snake(random(100, width - 100), random(100, height - 100));
const food = new Food(random(100, width - 100), random(100, height - 100));

const gameLoop = () => {
  ctx.fillStyle = "#0b0f1a";
  ctx.fillRect(0, 0, width, height);

  food.draw();

  snake.drawSnake();
  snake.checkGameOver();
  snake.update();
  snake.detectFoodCollision();

  requestAnimationFrame(gameLoop);
};

gameLoop();

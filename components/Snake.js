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
    this.velX = this.velY = 6.5;
    this.isX = this.isY = false;
    this.color = "#6fdb49";
    this.score = 0;
    this.snakeBody = [];
    this.bodyLength = 2;
    this.k = 1;

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
    // Draw snake head
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);

    // Draw snake body
    if (this.snakeBody.length === 0 && (this.isX || this.isY)) {
      for (let i = 0; i < 5; i++) {
        this.snakeBody.push(new Snake(this.x, this.y));
      }
    }

    for (const segment of this.snakeBody) {
      ctx.fillStyle = segment.color;
      ctx.fillRect(segment.x, segment.y, this.size, this.size);
    }
  }

  update() {
    // Changing the coordinates of the segment just before head
    if (this.snakeBody.length !== 0) {
      this.snakeBody[0].x = this.x;
      this.snakeBody[0].y = this.y;
    }

    // Updating the ith segment with the coordinates of (i-1)th segment
    for (let i = this.snakeBody.length - 1; i > 0; i--) {
      this.snakeBody[i].x = this.snakeBody[i - 1].x;
      this.snakeBody[i].y = this.snakeBody[i - 1].y;
    }

    // Updating the coordinates with velocity wrt to the axes
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

    // Self collision
    for (let i = 1; i < this.snakeBody.length; i++) {
      if (
        this.snakeBody[i].x === this.x &&
        this.snakeBody[i].y === this.y &&
        this.score > 1
      ) {
        alert("Game Over");
        break;
      }
    }
  }

  checkDifficulty() {
    // Increasing the speed by 0.5 at multiples of 5
    if (this.score > this.k * 5 && this.score !== 0) {
      this.k++;
      this.velX = Math.abs(this.velX) + 0.5;
      this.velY = Math.abs(this.velY) + 0.5;
    }
  }

  detectFoodCollision() {
    if (
      this.x < food.x + food.size &&
      food.x < this.x + this.size &&
      this.y < food.y + food.size &&
      food.y < this.y + this.size
    ) {
      this.score++; // Increment the score

      // Spawn new food
      food.x = random(100, width - 100);
      food.y = random(100, height - 100);

      // Add the segment of snake at the end so that the self collision does not messes up
      for (let i = 0; i < this.bodyLength; i++) {
        this.snakeBody.push(
          new Snake(
            this.snakeBody[this.snakeBody.length - 1].x,
            this.snakeBody[this.snakeBody.length - 1].y
          )
        );
      }
    }
  }
}

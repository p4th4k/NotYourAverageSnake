// Props

const poisionedApple = new PosionedApple(
  random(100, width - 100),
  random(100, height - 100)
);
const bomb = new Bomb(random(100, width - 100), random(100, height - 100));
const shield = new Shield(random(100, width - 100), random(100, height - 100));

const props = [poisionedApple, bomb, shield];

class Snake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isX = this.isY = false;
    this.velX = this.velY = 6.5;
    this.color = "#6fdb49";
    this.snakeBody = [];
    this.propOnScreen = [];
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
    if(isShield) ctx.fillStyle = "#49d1db";
    if(!isShield) ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, snakeSize, snakeSize);

    // Draw snake body
    if (this.snakeBody.length === 0 && (this.isX || this.isY)) {
      for (let i = 0; i < 5; i++) {
        this.snakeBody.push(new Snake(this.x, this.y));
      }
    }

    for (const segment of this.snakeBody) {
      if(isShield) ctx.fillStyle = "#49d1db";
      if(!isShield) ctx.fillStyle = segment.color;  
      ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
    }
  }

  drawProps() {
    for (const prop of this.propOnScreen) {
      prop.draw();
    }
  }

  addProp() {
    if (this.propOnScreen.length < 2) {
      let index = random(0, 2);
      if (!(props[index] in this.propOnScreen) && !(props[index].isPresent)) {
        props[index].isPresent = true;
        this.propOnScreen.push(props[index]);
      }
    }
  }

  detectPropCollision() {
    for (const prop of this.propOnScreen) {
      if (
        this.x < prop.x + prop.size - 16 && // Max X
        this.x + snakeSize > prop.x + 16 && // Min X
        this.y < prop.y + prop.size - 10 && // Max Y
        this.y + snakeSize > prop.y + 10 // Min Y
      ) {
        let index = this.propOnScreen.indexOf(prop);
        let index2 = props.indexOf(prop)
        if (prop.name === "bomb") {
          isAlive = false;
        }
        if (prop.name === "shield") {
          isShield = true;
          setTimeout(() => isShield = false, 10000);

          props[index2].isPresent = false;
          props[index2].x = random(100, width - 100);
          props[index2].y = random(100, height - 100);
          this.propOnScreen.splice(index, 1);
        }
        if (prop.name === "poisionedApple") {
          // Reduce the length of snake by 5 or kill it
          let len = 5;
          if(this.snakeBody.length > 5 && !isShield) while(len--) this.snakeBody.pop();
          if(this.snakeBody.length < 5 && !isShield) isAlive = false;

          props[index2].isPresent = false;
          props[index2].x = random(100 ,width - 100);
          props[index2].y = random(100, height - 100);
          this.propOnScreen.splice(index, 1);
        }
      }
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
      this.x + snakeSize >= width ||
      this.y <= 0 ||
      this.y + snakeSize >= height
    ) {
      isAlive = false;
    }

    // Self collision
    for (let i = 1; i < this.snakeBody.length; i++) {
      if (
        this.snakeBody[i].x === this.x &&
        this.snakeBody[i].y === this.y &&
        score > 1 &&
        !isShield
      ) {
        alert("Game Over");
        break;
      }
    }
  }

  checkDifficulty() {
    // Increasing the speed by 0.5 at multiples of 5
    if (score > this.k * 5 && score !== 0) {
      this.k++;
      this.velX = Math.abs(this.velX) + 0.5;
      this.velY = Math.abs(this.velY) + 0.5;
    }
  }

  detectFoodCollision() {
    if (
      this.x < food.x + food.size &&
      food.x < this.x + snakeSize &&
      this.y < food.y + food.size &&
      food.y < this.y + snakeSize
    ) {
      score++; // Increment the score

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

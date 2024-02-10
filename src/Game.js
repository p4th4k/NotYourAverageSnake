class Game {
    handleGameUI(){
        if(!isAlive){
            gameUi.classList.add("overlay")
            errBox.classList.remove("hide");
        }
    }

  drawBackground() {
    ctx.fillStyle = "#0b0f1a";
    ctx.fillRect(0, 0, width, height);
  }

  setupFood() {
    food.draw();
  }

  setupSnake() {
    // Draw props
    snake.addProp();
    snake.drawProps();

    // Draw and update snake
    snake.drawSnake();
    snake.update();
    
    // Check if game over or to increase difficulty
    snake.checkGameOver();
    snake.checkDifficulty();

    // Food and prop collision detection
    snake.detectFoodCollision();
    snake.detectPropCollision();
  }
}

const snake = new Snake(random(100, width - 100), random(100, height - 100));
const food = new Apple(random(100, width - 100), random(100, height - 100));
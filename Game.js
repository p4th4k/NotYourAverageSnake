class Game {
  setupFood() {
    food.draw();
  }
  setupSnake() {
    snake.drawSnake();
    snake.checkGameOver();
    snake.checkDifficulty();
    snake.update();
    snake.detectFoodCollision();
  }
}

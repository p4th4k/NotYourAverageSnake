const snake = new Snake(random(100, width - 100), random(100, height - 100));
const food = new Apple(random(100, width - 100), random(100, height - 100));

const game = new Game();

const gameLoop = () => {
  ctx.fillStyle = "#0b0f1a";
  ctx.fillRect(0, 0, width, height);

  game.setupFood();
  game.setupSnake();

  requestAnimationFrame(gameLoop);
};

gameLoop();

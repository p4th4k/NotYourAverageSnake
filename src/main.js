const game = new Game();

game.drawBackground();
game.setupFood();
game.setupSnake();

const gameLoop = () => {
  game.handleGameUI();

  if(!isAlive) return;

  game.drawBackground();
  game.setupFood();
  game.setupSnake();

  requestAnimationFrame(gameLoop);
};

playBtn.addEventListener("click", () => {
  gameUi.classList.remove("overlay");
  mainMenu.classList.add("hide");
  gameLoop();
})

errBtn.addEventListener("click", () => {
  window.location.reload();
})
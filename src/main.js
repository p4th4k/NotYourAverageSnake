const game = new Game();

game.drawBackground();
game.setupFood();
game.setupSnake();

game.getScore();
game.updateScore();

const gameLoop = () => {
  game.handleGameUI();
  game.updateScore();

  if(!isAlive){
    game.setScore();
    return;
  }

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
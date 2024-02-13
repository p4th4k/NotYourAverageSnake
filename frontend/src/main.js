const game = new Game();
const audio = new GameAudio();

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
    audio.bgm.pause();
    audio.playGameOver();
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
  audio.playBgm();
  snake.isGameStarted = true;
  gameLoop();
})

errBtn.addEventListener("click", () => {
  window.location.reload();
})
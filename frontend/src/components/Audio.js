class GameAudio{
    constructor(){
        this.bgm = new Audio('./audio/bgm.mp3');
        this.eatFoodMusic = new Audio('./audio/eatFood.mp3');
        this.poisionedMusic = new Audio('./audio/poisioned.mp3');
        this.gameOverMusic = new Audio('./audio/gameOver.mp3');
        this.shieldMusic = new Audio('./audio/shield.mp3');
    }

    playBgm(){
        this.bgm.currentTime = 2.5;
        this.bgm.play();

        this.bgm.addEventListener('ended', () => {
            this.bgm.currentTime = 2.5;
            this.bgm.play();
        }, false)
    }

    playEatFood(){
        this.eatFoodMusic.play();
    }

    playPosionedFood(){
        this.poisionedMusic.play();
    }

    playGameOver(){
        this.gameOverMusic.play();
    }

    playShield(){
        this.shieldMusic.play();
    }
}
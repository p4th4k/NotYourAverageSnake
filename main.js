const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class Box{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Snake extends Box{
    constructor(x,y){
        super(x,y);
        this.velX = 7;
        this.velY = 7;
        this.isX = false;
        this.isY = false;
        this.size = 20;
        this.color = "#6fdb49";
        this.score = 0;
        this.startingLength = 3;
        this.snakeBody = [];

        window.addEventListener("keydown", (e) => {
            switch(e.key){
                case "w":
                    this.velY = -(Math.abs(this.velY));
                    this.isY = true;
                    this.isX = false;
                    break;
                case "a":
                    this.velX = -(Math.abs(this.velX));
                    this.isX = true;
                    this.isY = false;
                    break;
                case "s":
                    this.velY = Math.abs(this.velY);
                    this.isY = true;
                    this.isX = false;
                    break;
                case "d":
                    this.velX = Math.abs(this.velX);
                    this.isX = true;
                    this.isY = false;
            }
        })
    }

    drawSnakeHead(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    update(){
        if (this.isX) this.x += this.velX;
        if (this.isY) this.y += this.velY;
    }
}

const snake = new Snake(random(100, width - 100), random(100, height - 100));

const gameLoop = () => {
    ctx.fillStyle = "#0b0f1a";
    ctx.fillRect(0, 0, width, height);

    snake.drawSnakeHead();
    snake.update();

    requestAnimationFrame(gameLoop);
}

gameLoop();
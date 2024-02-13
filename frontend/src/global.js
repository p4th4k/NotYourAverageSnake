const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

const width = (canvas.width = getWidth());
const height = (canvas.height = getHeight());

// UI

const playBtn = document.getElementById("play");
const gameUi = document.getElementById("gameUi");
const mainMenu = document.getElementById("mainMenu");
const errBox = document.getElementById("errBox");
const errBtn = document.getElementById("errBtn");
const rulesBox = document.getElementById("rulesBox");
const rulesBtn = document.getElementById("btn");

const scoreP = document.getElementById("score");
const highScoreP = document.getElementById("highScore");

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Global Game Variables

let score = 0;
let snakeSize = 20;
let isShield = false;
let isAlive = true;

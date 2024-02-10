const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// UI

const playBtn = document.getElementById("play");
const gameUi = document.getElementById("gameUi");
const mainMenu = document.getElementById("mainMenu");
const errBox = document.getElementById("errBox");
const errBtn = document.getElementById("errBtn");

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Global Game Variables

let score = 0;
let snakeSize = 20;
let isShield = false;
let isAlive = true;
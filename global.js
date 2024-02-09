const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
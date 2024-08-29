const canvas = document.querySelector("canvas");
const button = document.querySelector("button");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

ctx.globalCompositeOperation = "xor";

ctx.fillStyle = "#222";
ctx.beginPath();
ctx.arc(100, 120, 50, 0, Math.PI * 2, false);
ctx.fill();

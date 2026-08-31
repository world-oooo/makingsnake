console.log("Hello, Snake Game!");
document.getElementById("gameCanvas").width = 400;
document.getElementById("gameCanvas").height = 400;
getcanvas = document.getElementById("gameCanvas");
getcanvas.getContext("2d").fillStyle.fillRect(0, 0, 400, 400);
getcanvas.getContext("2d").strokeStyle.strokeRect(0, 0, 400, 400);

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");

ctx.fillStyle = "white";
ctx.strokeStyle = "black";

ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

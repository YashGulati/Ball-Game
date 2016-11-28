
function bannerPause(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawScore();
  drawLives();
  console.log("game paused");
  ctx.font = "50px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Game Paused", myCanvasWidth/2 - 160, myCanvasHeight/2);
  ctx.font = "20px Arial";
  ctx.fillText("Press Enter to Continue", myCanvasWidth/2 - 100, myCanvasHeight/2 + 40);
  if (gameState == "active")
   requestAnimationFrame(draw);
 else if (gameState == "paused")
   requestAnimationFrame(bannerPause);
}

function bannerWon(){
  ctx.font = "50px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("You Won", myCanvasWidth/2 - 160, myCanvasHeight/2);
  ctx.font = "20px Arial";
  ctx.fillText("Press Enter to Start new game", myCanvasWidth/2 - 100, myCanvasHeight/2 + 40);
  if (escapePressed)
    document.location.reload();
  requestAnimationFrame(bannerWon);
}

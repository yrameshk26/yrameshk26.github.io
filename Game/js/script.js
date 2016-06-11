// This say that this functionloads first when page loads
window.addEventListener("load", dofirst);

// This is the definition of function which is supposed to load first
function dofirst() {
				//BEGIN LIBRARY CODE
				var c = document.getElementById("canvas");
				var x = 25;
				var y = 250;
				var r = 10;
				var dx = 1.5;
				var dy = -4;
				var ctx;
				var WIDTH;
				var HEIGHT;
				var paddlex;
				var bricks;
				var NROWS = 8;
				var NCOLS = 8;
				var BRICKWIDTH;
				var BRICKHEIGHT = 15;
				var PADDING = 1;
				var paddleh = 30;
				var paddlew = 500;
				var rightDown = false;
				var leftDown = false;
				var canvasMinX = 0;
				var canvasMaxX = 0;
				var intervalId = 0;
				var rowcolors = ["#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#EB0093","#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#EB0093"];
				var paddlecolor = "#FFFFFF";
				var ballcolor = "#FFFFFF";
				var backcolor = "black";


				window.addEventListener('resize', resizeCanvas, false);

						
				 
				function circle(x,y,r) {
							  ctx.beginPath();
							  ctx.arc(x, y, r, 0, Math.PI*2, true);
							  ctx.closePath();
							  ctx.fill();
				}

				function rect(x,y,w,h) {
							  ctx.beginPath();
							  ctx.rect(x,y,w,h);
							  ctx.closePath();
							  ctx.fill();
				}

				function clear() {
							ctx.clearRect(0, 0, WIDTH, HEIGHT);
				  			rect(0,0,WIDTH,HEIGHT);
				}

				//set rightDown or leftDown if the right or left keys are down
				function onKeyDown(evt) {
							if (evt.keyCode == 39) rightDown = true;
							else if (evt.keyCode == 37) leftDown = true;
				}

				//and unset them when the right or left key is released
				function onKeyUp(evt) {
				  if (evt.keyCode == 39) rightDown = false;
				  else if (evt.keyCode == 37) leftDown = false;
				}

				document.addEventListener("keydown", onKeyDown);
				document.addEventListener("keyup", onKeyUp);

				function onMouseMove(evt) {
				  if (evt.pageX > canvasMinX-10 && evt.pageX < canvasMaxX) {
				    paddlex = evt.pageX - canvasMinX;
				  }
				}

				document.getElementById("canvas").addEventListener("mousemove", onMouseMove);
				
				function initbricks() {
							  bricks = new Array(NROWS);
							  for (i=0; i < NROWS; i++) {
							    bricks[i] = new Array(NCOLS);
							    for (j=0; j < NCOLS; j++) {
							      bricks[i][j] = 1;
							    }
							  }
				}

				function drawbricks() {
							  for (i=0; i < NROWS; i++) {
							    ctx.fillStyle = rowcolors[i];
							    for (j=0; j < NCOLS; j++) {
							      if (bricks[i][j] == 1) {
							        rect((j * (BRICKWIDTH + PADDING)) + PADDING, 
							             (i * (BRICKHEIGHT + PADDING)) + PADDING,
							             BRICKWIDTH, BRICKHEIGHT);
							      }
							    }
							  }
							}

				function pauseGame() {
					clearInterval(intervalId);
				}

				function stopGame() {
					clearInterval(intervalId);
					var x;
    					if (confirm("Are you sure? Do you want to quit the Game?") == true) {
					       // alert("Thank you for playing our game!!!");
    						window.close();
					    } else {
					        alert("Enjoy The Game!!!");
					        startGame();
					    }
				}

				function restartGame() {
					drawbricks();
					initbricks();
					var x = 25;
					var y = 250;
					var r = 10;
					var dx = 1.5;
					var dy = -4;
					ctx.fillStyle = backcolor;
					clear();
					ctx.fillStyle = ballcolor;
					circle(x, y, r);
					ctx.fillStyle = paddlecolor;
					rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);
					//clearInterval(intervalId);
				}


				function startGame() {
							  ctx = c.getContext("2d");
							  WIDTH = c.width;
							  HEIGHT = c.height;
							  paddlex = WIDTH / 2;
							  BRICKWIDTH = (WIDTH/NCOLS) - 1;
							  canvasMinX = c.offsetLeft;
							  canvasMaxX = canvasMinX + WIDTH;
							  intervalId = setInterval(draw, 10);
  							  
				}


				//END LIBRARY CODE
				
				function draw() {
							ctx.fillStyle = backcolor;
							clear();
							ctx.fillStyle = ballcolor;
							circle(x, y, r);

							//move the paddle if left or right is currently pressed
							if (rightDown) paddlex += 15;
							else if (leftDown) paddlex -= 15;
							ctx.fillStyle = paddlecolor;
							rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);
							
							drawbricks();

							//have we hit a brick?
							  rowheight = BRICKHEIGHT + PADDING;
							  colwidth = BRICKWIDTH + PADDING;
							  row = Math.floor(y/rowheight);
							  col = Math.floor(x/colwidth);
							  //if so, reverse the ball and mark the brick as broken
							  if (y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
							    dy = -dy;
							    bricks[row][col] = 0;
							  }

							if (x + dx > WIDTH-r || x + dx <r)
    							dx = 1.01 * -dx;

  							if (y + dy < r)
    							dy = 1.01 * -dy;

    						else if (y + dy > HEIGHT-r-paddleh) {
	    						if (x > paddlex && x < paddlex + paddlew){
	    							//move the ball differently based on where it hit the paddle
	      							dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
	      							dy = 1.01 * -dy;
      							}
						    else
						      //game over, so stop the animation
						      clearInterval(intervalId);
 							}

  							x += dx;
  							y += dy;
				}

				function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = 0.8 * window.innerHeight;
            	
				document.getElementById("startBtn").addEventListener("click", startGame);
				document.getElementById("pauseBtn").addEventListener("click", pauseGame);
				document.getElementById("restartBtn").addEventListener("click", restartGame);
				document.getElementById("stopBtn").addEventListener("click", stopGame);

				initbricks();
				}

				resizeCanvas();
}
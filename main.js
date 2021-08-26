var game00 = new Game();


function checkGame() { 	
  window.requestAnimationFrame(checkGame);
  game00.checkGame();
}

function docReady() {              
  game00.generateWorld();
  checkGame();
}

window.addEventListener("load", function(event) {
  docReady();
});
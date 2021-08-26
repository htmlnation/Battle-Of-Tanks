class Game {
	constructor() {
    this.level = 0;
    this.world = new World();
	}

  generateWorld() {
    this.loadWorld();
  }

  loadWorld(map = 0) {
    this.world = new World();
    this.world.draw(map);
  }

  cleanWorld() {
    var currentWorld = document.getElementById('world');
    currentWorld.parentNode.removeChild(currentWorld);
  }

  levelUp() {
    this.cleanWorld();
    this.loadWorld(this.level);
  }

  move(event) {
    this.world.move(event);
  }

  checkGame() {
  }
}
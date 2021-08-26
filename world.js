class World {
	constructor() {
		this.width = 0;
    this.heigth = 0;
		this.rotationX = 0;
		this.rotationY = 0;
		this.rotationZ = 0;
    this.obstacles = [];
    this.grass = '';
    this.road = '';
    this.tree = '';
    this.worldLevel = 0;
    this.character = {};
	}

	draw(worldLevel = 0) {    
		let worldMap = new WorldMap();
    worldMap.loadMap(worldLevel);
    this.worldLevel = worldLevel;
    let world = document.createElement('div');
		world.className = 'world';
		world.id = 'world';
		let container = document.getElementById('canvas');
		container.appendChild(world);
    world.style.width = worldMap.getWidth() * CUBESIZE + PX;
    world.style.height = worldMap.getHeight() * CUBESIZE + PX;
    this.drawGround(world, worldMap);
    this.drawLayer(world, worldMap);
    this.drawCharacter(CHARACTER, worldMap);    
    this.setWorldLimits(worldMap);
	}

  drawCharacter(characterModel, worldMap) {
    let layer = document.getElementById('layer01');
    let map = worldMap.getLayer();
    this.character =  new Character('character', 0, CUBESIZE, layer, cubeStyles['C']);
    //Getting the position of the character on the map
    let mapRows = map.length;
    let posX = map[mapRows-1].indexOf('C') * CUBESIZE;    
    let posY = mapRows * CUBESIZE -  CUBESIZE;
    this.character.draw(posX, posY);
    this.character.posiX = posX/CUBESIZE;
    this.character.posiY = posY/CUBESIZE;
  }

  drawGround(world, worldMap) {    
    let map = worldMap.getGround();
    this.drawMap(world, map);    
  }

  drawLayer(world, worldMap) {
    let layer = document.createElement('div');
    layer.className = 'layer01';
    layer.id = 'layer01';
    world.appendChild(layer);
    let map = worldMap.getLayer();
    this.drawMap(layer, map, true);
  }

  drawMap(father, map, isObstacle = false) {
    let posX = 0;
    let posY = 0;
    let counter = 0;
    for(let i = 0; i < map.length; i++) {
      posX = 0;      
      for(let j = 0; j < map[0].length; j++) {
        if(cubeStyles[map[i].charAt(j)] && map[i].charAt(j) !== 'C') {
          let key = map[i].charAt(j);
          let cube = new Cube('cube', counter, CUBESIZE, father, cubeStyles[key]);
          cube.draw(posX, posY);
          if(isObstacle) {
            this.obstacles.push(cube);
          }
        }
        posX += CUBESIZE;
        counter++;
      }
      posY += CUBESIZE;
    }
  }  

  setWorldLimits(worldMap) {
    LTOP = 0;
    LBOTTOM = worldMap.getLayer().length * CUBESIZE - CUBESIZE;
    LRIGHT = worldMap.getLayer()[0].length * CUBESIZE - CUBESIZE;    
    LLEFT = 0;    
  }

	move(key) {
  	if (key.code === 'KeyW' ) {
  		this.rotationX += ROTATESPEED;
  		var currentWorld = document.getElementById('world');
  		currentWorld.style.transform = 'rotateX('+this.rotationX+'deg) rotateZ('+this.rotationZ+'deg) rotateY('+this.rotationY+'deg)';
  	}
  	if (key.code === 'KeyS' ) {
  		this.rotationX -= ROTATESPEED;
  		var currentWorld = document.getElementById('world');
  		currentWorld.style.transform = 'rotateX('+this.rotationX+'deg) rotateZ('+this.rotationZ+'deg) rotateY('+this.rotationY+'deg)';
  	}
  	if (key.code === 'KeyA' ) {
  		this.rotationY -= ROTATESPEED;
  		var currentWorld = document.getElementById('world');
  		currentWorld.style.transform = 'rotateX('+this.rotationX+'deg) rotateZ('+this.rotationZ+'deg) rotateY('+this.rotationY+'deg)';
  	}
  	if (key.code === 'KeyD' ) {
  		this.rotationY += ROTATESPEED;
  		var currentWorld = document.getElementById('world');
  		currentWorld.style.transform = 'rotateX('+this.rotationX+'deg) rotateZ('+this.rotationZ+'deg) rotateY('+this.rotationY+'deg)';
  	}
  	if (key.code === 'KeyQ' ) {
  		this.rotationZ -= ROTATESPEED;
  		var currentWorld = document.getElementById('world');
  		currentWorld.style.transform = 'rotateX('+this.rotationX+'deg) rotateZ('+this.rotationZ+'deg) rotateY('+this.rotationY+'deg)';
  	}
  	if (key.code === 'KeyE' ) {
  		this.rotationZ += ROTATESPEED;
  		var currentWorld = document.getElementById('world');
  		currentWorld.style.transform = 'rotateX('+this.rotationX+'deg) rotateZ('+this.rotationZ+'deg) rotateY('+this.rotationY+'deg)';
  	}

    this.character.move(key.code, this.checkObstacles(key.code));
	}

  checkObstacles(moveDirection) {
    let posiX = this.character.posiX;
    let posiY = this.character.posiY;
    if (moveDirection == 'ArrowUp') {
      posiY--;
    } else if (moveDirection == 'ArrowDown') {
      posiY++;
    } else if (moveDirection == 'ArrowLeft') {
      posiX--;
    } else if (moveDirection == 'ArrowRight') {
      posiX++;
    }
    for (let i = 0; i < this.obstacles.length; i++) {
      if (posiX == (this.obstacles[i].positionX/CUBESIZE) 
        && posiY == (this.obstacles[i].positionY/CUBESIZE)) {
        return false;
      }
    }
    return true;
  }
}
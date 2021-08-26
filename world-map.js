class WorldMap {
  constructor(currentlayer) {
    this.ground = [];
    this.layer = [];
    this.enemyLayer = [];
    this.width = 0;
    this.height = 0;
  }

  getGround() {
    return this.ground;
  }

  getLayer() {
    return this.layer;
  }

  getEnemyLayer() {
    return this.enemyLayer;
  }

  getHeight() {
    return this.ground.length;
  }

  getWidth() {
    return this.ground[0].length;
  }

  loadMap(level) {
    this.ground = [];
    this.layer = [];    
    switch(level) {
      case 0:
        this.loadMap00();
        break;
      default:
        this.loadMap00();    
    }    
  }

  loadMap00() {
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    this.ground.push('GGGGGGGGGGGGG');
    
    this.layer.push('NNNONNNONNNNN');
    this.layer.push('NBNONNNBNBNBN');
    this.layer.push('NBNNNNBBNBOBN');
    this.layer.push('NNNBNNNNNONNN');
    this.layer.push('BNNBNNONNBBBO');
    this.layer.push('BBNNNBBBBNBNN');
    this.layer.push('NBBBBBNBNNBNN');
    this.layer.push('NNNONBNBNNBBN');
    this.layer.push('OBNONBBBNBNBN');
    this.layer.push('NBNBNBBBNNNBN');
    this.layer.push('NBNBNNNNNBBBN');   
    this.layer.push('NBNNNBBBNBNBN');
    this.layer.push('NBNBCBNBNBBBN');

    this.enemyLayer.push('GGGGGG');
    this.enemyLayer.push('GGGGGG');
    this.enemyLayer.push('RRRRRC');
    this.enemyLayer.push('RRRRRR');
    this.enemyLayer.push('CRRRRR');
    this.enemyLayer.push('GGGGGG');
    this.enemyLayer.push('GGGGGG');
    this.enemyLayer.push('CRRRRR');
    this.enemyLayer.push('RRRRRC');
    this.enemyLayer.push('GGGGGG');
  }
}
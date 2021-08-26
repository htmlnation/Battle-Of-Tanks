class Character extends Cube {
  constructor(className, layerId, size, father, cubeStyle) {
    super(className, layerId, size, father, cubeStyle);
    this.posiX = 0;
    this.posiY = 0;
  }

  move(keyCode, isValid) {
    if (keyCode === 'ArrowUp' ) {
      this.positionY -= CUBESIZE;
      if (this.positionY >= 0 && isValid) {
        this.posiY --;
        this.objectDiv.style.top = this.positionY + PX;
        this.objectDiv.style.transform = 'rotateZ(0deg)';
      } else {
        this.positionY += CUBESIZE;
      }
    }

    if (keyCode === 'ArrowDown' ) {
      this.positionY += CUBESIZE;
      if (this.positionY <= LBOTTOM && isValid) {
        this.objectDiv.style.top = this.positionY + PX;
        this.posiY ++;
        this.objectDiv.style.transform = 'rotateZ(-180deg)';
      } else {
        this.positionY -= CUBESIZE; 
      }
    }

    if (keyCode === 'ArrowLeft' ){
      this.positionX -= CUBESIZE;
      if (this.positionX >= LLEFT && isValid) {
        this.objectDiv.style.left = this.positionX + PX;
        this.posiX --;
        this.objectDiv.style.transform = 'rotateZ(-90deg)';
      } else {
        this.positionX += CUBESIZE;
      }      
    }

    if (keyCode === 'ArrowRight' ){
      this.positionX += CUBESIZE;
      if (this.positionX <= LRIGHT && isValid) {
        this.objectDiv.style.left = this.positionX + PX;
        this.posiX ++;
        this.objectDiv.style.transform = 'rotateZ(90deg)';
      } else {
        this.positionX -= CUBESIZE;
      }
    }
  }
}
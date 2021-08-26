class Cube {
	constructor(className, layerId, size, father, cubeStyle) {
		this.className = className;
		this.id = className + layerId;
		this.positionX = 0;
		this.positionY = 0;
		this.initialX = 0;
		this.initialY = 0;
		this.side = size;
		this.father = father;
		this.cubeStyle = cubeStyle;
		this.objectDiv = document.createElement('div');
	}

	draw(newPositionX, newPositionY) {
		this.objectDiv.className = this.className;
		this.objectDiv.id = this.id;
		this.positionX = newPositionX;
		this.positionY = newPositionY;
		this.initialX = newPositionX;
		this.initialY = newPositionY;
		let front = document.createElement('div');
		front.className = 'front';		
		front.style.backgroundImage = "url('" + this.cubeStyle.front +"')";
		let back = document.createElement('div');
		back.className = 'back';
		back.style.backgroundImage = "url('" + this.cubeStyle.back +"')";
		let right = document.createElement('div');
		right.className = 'right';
		right.style.backgroundImage = "url('" + this.cubeStyle.right +"')";
		let left = document.createElement('div');
		left.className = 'left';
		left.style.backgroundImage = "url('" + this.cubeStyle.left +"')";
		let top = document.createElement('div');
		top.className = 'top';
		top.style.backgroundImage = "url('" + this.cubeStyle.top +"')";
		let bottom = document.createElement('div');
		bottom.className = 'bottom';
		bottom.style.backgroundImage = "url('" + this.cubeStyle.bottom +"')";
		
		this.objectDiv.appendChild(front);
		this.objectDiv.appendChild(back);
		this.objectDiv.appendChild(right);
		this.objectDiv.appendChild(left);
		this.objectDiv.appendChild(top);
		this.objectDiv.appendChild(bottom);

		this.objectDiv.style.position = 'absolute';
		this.objectDiv.style.left = this.positionX + PX;
		this.objectDiv.style.top = this.positionY + PX;

		this.father.appendChild(this.objectDiv);
	}
}
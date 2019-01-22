class Obstacle {
	constructor(width,height,color,x,y){
		this.width=width;
		this.height=height;
		this.color=color;
		this.x=x;
		this.y=y;
		this.speedY=0;
	}
	drawObstacle(ctx){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height)
	}

	//moveLeft()
}

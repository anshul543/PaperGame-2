class dustbin {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.dbw = 200;
		this.dbh = 213;
		this.wt = 20;

		this.image = loadImage("dustbingreen.png");

		this.Bb = Bodies.rectangle(this.x, this.y, this.dbw, this.wt, {isStatic : true});

		this.Lb = Bodies.rectangle(this.x - this.dbh / 2, this.y - this.dbh / 2, this.wt, this.dbh, {isStatic : true});

		this.Rb = Bodies.rectangle(this.x + this.dbw / 2, this.y - this.dbh / 2, this.wt, this.dbh, {isStatic : true});

		World.add(world, this.Bb);
		World.add(world, this.Lb);
		World.add(world, this.Rb);

	}
	display() {
		var pB = this.Bb.position;
		var pL = this.Lb.position;
		var pR = this.Rb.position;


		push()
		translate(pL.x, pL.y);
		rectMode(CENTER);
		angleMode(RADIANS);
		fill(255);
		rotate(this.angle);
		pop()

		push()
		translate(pR.x, pR.y);
		rectMode(CENTER);
		angleMode(RADIANS);
		fill(255);
		rotate(-1 * this.angle);
		pop()

		push()
		translate(pB.x, pB.y + 10);
		rectMode(CENTER);
		angleMode(RADIANS);
		fill(255)
		imageMode(CENTER);
		image(this.image, 0, -this.dbh / 2, this.dbh, this.dbh)
		pop()

	}

}
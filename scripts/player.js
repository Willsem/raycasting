class Player {
    constructor(x, y, a) {
        this.pos = createVector();
        this.pos.x = x;
        this.pos.y = y;
        this.angle = a;
        this.view = 30;
        this.len = 300;
    }

    show(walls) {
        stroke(200, 100, 100);
        strokeWeight(3);
        point(this.pos.x, this.pos.y);

        stroke(255);
        strokeWeight(1);

        for (let a = this.angle - this.view; a <= this.angle + this.view; a += 0.5) {
            let ray = new Ray(
                this.pos.x,
                this.pos.y,
                this.pos.x + Math.cos(radians(a)) * this.len,
                this.pos.y + Math.sin(radians(a)) * this.len,
                this.len
            );

            ray.show(walls);
        }
    }

    move(direction) {
        this.pos.x += Math.cos(radians(this.angle)) * direction;
        this.pos.y += Math.sin(radians(this.angle)) * direction;
    }

    rotate(angle) {
        this.angle += angle;
    }
}

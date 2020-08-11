class Player {
    constructor(x, y, a) {
        this.pos = createVector();
        this.pos.x = x;
        this.pos.y = y;
        this.angle = a;
        this.view = 30;
        this.len = 400;
    }

    show(walls) {
        stroke(200, 100, 100);
        strokeWeight(3);
        point(this.pos.x / mapSize.x * miniMapSize.x, this.pos.y / mapSize.y * miniMapSize.y);

        let wd = width / (4 * this.view);
        let number = 0;
        const delta = 2 * this.view / width;
        for (let a = this.angle - this.view; a <= this.angle + this.view; a += delta) {
            let ray = new Ray(
                this.pos.x,
                this.pos.y,
                this.pos.x + Math.cos(radians(a)) * this.len,
                this.pos.y + Math.sin(radians(a)) * this.len,
                this.len,
                1,
                number++,
                a - this.angle
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

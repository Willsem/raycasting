class Ray {
    constructor(x1, y1, x2, y2, dist, width, number, delta) {
        this.start = createVector();
        this.start.x = x1;
        this.start.y = y1;
        this.finish = createVector();
        this.finish.x = x2;
        this.finish.y = y2;
        this.dist = dist;
        this.len = dist;
        this.width = width;
        this.number = number;
        this.delta = delta;
    }

    show(walls) {
        walls.forEach(function(wall) {
            const inter = this.intersection(wall);
            if (inter[0] >= 0 && inter[0] <= 1 && inter[1] >= 0 && inter[1] <= 1) {
                const d = dist(this.start.x, this.start.y, inter[2].x, inter[2].y)
                if (d < this.dist) {
                    this.finish = inter[2];
                    this.dist = d;
                }
            }
        }, this);

        stroke(255);
        strokeWeight(1);

        line(
            this.start.x / mapSize.x * miniMapSize.x,
            this.start.y / mapSize.y * miniMapSize.y,
            this.finish.x / mapSize.x * miniMapSize.x,
            this.finish.y / mapSize.y * miniMapSize.y
        );

        noStroke();
        fill(255 - this.dist / 1.5);
        const h = (1 - this.len / (this.dist * Math.cos(radians(this.delta)))) * (height - 200);
        const y = this.width * this.number <= miniMapSize.x ? miniMapSize.y : 0;
        const dh = (height - h) / 2;
        if (this.dist < this.len) {
            rect(this.width * this.number, dh, this.width, h);
        }
    }

    intersection(wall) {
        const x1 = this.start.x;
        const x2 = this.finish.x;
        const x3 = wall.start.x;
        const x4 = wall.finish.x;

        const y1 = this.start.y;
        const y2 = this.finish.y;
        const y3 = wall.start.y;
        const y4 = wall.finish.y;

        const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
        const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

        return [ua, ub, createVector(x1 + ua * (x2 - x1), y1 + ua * (y2 - y1))];
    }
}

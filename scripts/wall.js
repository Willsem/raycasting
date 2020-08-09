class Wall {
    constructor(x1, y1, x2, y2) {
        this.start = createVector();
        this.start.x = x1;
        this.start.y = y1;

        this.finish = createVector();
        this.finish.x = x2;
        this.finish.y = y2;
    }

    show() {
        stroke(200);
        strokeWeight(2);
        line(this.start.x, this.start.y, this.finish.x, this.finish.y);
    }
}

let walls;
let player;

function setup() {
    createCanvas(500, 500);
    player = new Player(250, 250, 0);

    walls = [
        new Wall(0, 0, width, 0),
        new Wall(width, 0, width, height),
        new Wall(width, height, 0, height),
        new Wall(0, height, 0, 0),
        new Wall(100, 0, 100, 100),
        new Wall(100, 100, 470, 356),
    ];
}

function draw() {
    if (keyIsDown(87)) { // W
        player.move(1);
    }
    if (keyIsDown(65)) { // A
        player.rotate(-1);
    }
    if (keyIsDown(83)) { // S
        player.move(-1);
    }
    if (keyIsDown(68)) { // D
        player.rotate(1);
    }

    background(50);
    walls.forEach(w => w.show());
    player.show(walls);
}

function keyPressed() {
}

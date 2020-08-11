let walls;
let player;
let mapSize;
let miniMapSize;

function setup() {
    createCanvas(500, 500);
    player = new Player(250, 250, 0);
    mapSize = createVector(500, 500);
    miniMapSize = createVector(100, 100);

    walls = [
        new Wall(0, 0, width, 0),
        new Wall(width, 0, width, height),
        new Wall(width, height, 0, height),
        new Wall(0, height, 0, 0),
        new Wall(200, 0, 200, 200),
        new Wall(200, 200, 350, 200),
        new Wall(350, 200, 350, 400),
        new Wall(350, 400, 150, 400),
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
    player.show(walls);
    walls.forEach(w => w.show());
}

function keyPressed() {
}

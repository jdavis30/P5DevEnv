var x;
var y;

function setup() {
    createCanvas(400,400);
    x = 200;
    y = 200;
    background(51);
}

function draw() {
    
    stroke(255);
    strokeWeight(2);
    point(x,y);

    var direction = floor(random(0,4));
    var stepLength = 1;

    switch (direction) {
        case 0:
            x += stepLength;
            break;
        case 1:
            x -= stepLength;
            break;
        case 2:
            y += stepLength;
            break;
        case 3:
            y -= stepLength;
            break;
    }
}
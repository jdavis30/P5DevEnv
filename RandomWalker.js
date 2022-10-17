var x = 200;
var y = 200;

function setup() {
    createCanvas(400,400);
}

function draw() {
    background(51);
    stroke(255);
    strokeWeight(2);
    point(x,y);

    var r = floor(random(-4,4));


    x += floor(random(-4,4));
    y += floor(random(-4,4));

}
function preload() {}

var nosex = 0;
var nosey = 0;

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw() {}

function take_snapshot() {
    save('myFiltertImage.png');
}
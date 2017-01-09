var circles = [];
var spots = [];
var img;

function preload(){
  img = loadImage("assets/img.png")
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  for (var x = 0; x < width; x++){
    for (var y = 0; y < height; y++){
      var b = brightness(img.get(x, y));
      if(b > 1) {
        spots.push(new p5.Vector(x, y));
      }
    }
  }
  console.log(spots.length);
}

function draw() {
  background(0);

  newCircle();

  for(var i = 0; i < circles.length; i++){
    circles[i].grow(circles);
    circles[i].render();
  }
}

  function newCircle(){

    var r = random(spots);

    var x = r.x;
    var y = r.y;

    var valid = true;
    for(var i = 0; i < circles.length; i++){
      if (dist(x, y, circles[i].x, circles[i].y) < circles[i].r){
        valid = false;
        break;
      }
    }

    if(valid){
      circles.push(new Circle(x, y));
    }
  }

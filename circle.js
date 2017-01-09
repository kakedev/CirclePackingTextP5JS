function Circle(x_, y_){
  this.x = x_;
  this.y = y_;
  this.r = 1;

  this.render = function(){
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.grow = function(a){
    if(!this.edges(a)){
      this.r += 0.25;
    }
  }

  this.edges = function(cir){
    var edge = (this.x + this.r > width || this.x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0);
    var overlapping = false;
    for(var i = 0; i < cir.length; i++){
      if(this != cir[i]){
        if(dist(this.x, this.y, cir[i].x, cir[i].y)-2 < this.r + cir[i].r){
          overlapping = true;
          break;
        }
      }
    }
    var returnB = false;
    if(edge == true || overlapping == true){
      returnB = true;
    }
    return returnB;
  }
}

// Akash Meshram  IIT Khargpur
// Mandelbrot set

function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  for(var x = 0 ; x < width ; x++){
    for(var y = 0 ; y < height ; y++){
      var a_ = map(x,0,width,-2.6,1.6);
      var b_ = map(y,0,height,-1,1);

      var a = a_;
      var b = b_;

      var iter = 0;
      var numIter = 50;

      while(a*a + b*b < 32 && iter < numIter){
        var atemp = a*a - b*b + a_ ;
        b = 2*a*b + b_ ;
        a = atemp ;
        iter++;
      }

      var iter_ = iter;

      if(iter < numIter){
        var log_zn = log(a*a + b*b)/log(2);
        var nu = log(log_zn/log(2))/log(2);
        iter_ = iter_ +1 -nu;
      }

      var col1 = floor(iter_);
      var col2 = floor(iter_) + 1;

      var col = lerp(col1,col2,iter_%1);

      var bright = map(col,0,50,5,255);
      // if(iter ==50){
      //   bright = 10;
      // }
      var pix = (x + y*width)*4;
      pixels[pix+0] = bright;
      pixels[pix+1] = 25;
      pixels[pix+2] = 25;
      pixels[pix+3] = 255;
    }
  }
  updatePixels();

}

// Linera interpolation
function lerp( v0,v1,t ) {
  return (1 - t) * v0 + t * v1;
}

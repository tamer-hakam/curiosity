

function windowResized (){
resizeCanvas( windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL );
}

function draw() {
 
  background(150);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.01);
  torus(30, 15);
  rotateX(frameCount * 0.03);
  rotateZ(frameCount * 0.01);
  cone(80, 70);
}
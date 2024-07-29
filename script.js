let particles = [];
const num = 1000;
const noiseScale = 0.01;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(0, 10);
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    let inter = map(p.y, 0, height, 0, 1);
    let col = lerpColor(color(255, 182, 193), color(176, 224, 230), inter);
    stroke(col);
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

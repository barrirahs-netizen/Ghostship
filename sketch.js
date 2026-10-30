let WIDTH = 480
let HEIGHT= 360
let ghost;
let score = 0;
let duration = 30;
let startTime;
let state = 'start';
let spawnEvery = 60;



 function setup() {
  createCanvas(WIDTH, HEIGHT);
   spawnGhost();
}


function draw() {
  // Draw sky
  background("#982abc");
  noStroke();
  fill("#fffbb9");
  ellipse(400, 60, 50, 50);
  fill("#7a219e");
  rect(0, 90, 480, 30);
  fill("#61187c");
  rect(0, 120, 480, 30);
  fill("#450d59");
  rect(0, 150, 480, 30);
  fill("#2e063d");
  rect(0, 200, 480, 60);
  fill("#2e063d");
  rect(0, 170, 480, 60);
  fill("#263e0f");
  rect(0, 250, 480, 60);
  fill("#263e0f");
  rect(0, 300, 480, 60);
  drawGhost(240,180);
  drawGhost(100,80);
  if (state === 'start') {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(22);
    text('Click to start', width / 2, height / 2);
    return;
  }

  if (state === 'over') {
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(22);
    text('Game over\nScore: ' + score + '\nClick to retry', width / 2, height / 2);
    return;
    let elapsed = (millis() - startTime) / 1000;
    let timeLeft = max(0, duration - elapsed);
    if (timeLeft <= 0) {
       state = 'over';
       return;
    }
    if (frameCount % spawnEvery === 0) spawnGhost();
    drawGhost(ghost.x, ghost.y);

    textAlign(LEFT, TOP);
    fill(255);
    textSize(16);
    text('Score: ' + score, 12, 10);
    textAlign(RIGHT, TOP);
    text('Time: ' + ceil(timeLeft), width - 12, 10);
}

 function drawGhost(x, y) {
   
 noStroke();
 fill("#d38301");
 rect(x, y, 60, 60);
 fill("#da5100");
   rect(x, y, 20, 60);
 rect(x+50 ,y, 20, 60);
   fill("#3c071b");
   rect(x+25, y- 5, 20, 10);
 fill("#f5ec00");
 rect(x+15, y + 15, 10);
 rect(x+40 ,y + 15 , 10);
}

let Ghost;
let spawnEvery = 60;

}
function mousePressed() {
  if (state === 'start' || state === 'over') {
    state = 'play';
    score = 0;
    startTime = millis();
    spawnGhost();
    return;
  }
  if (dist(mouseX, mouseY, ghost.x, ghost.y) < 30) {
    score++;
    spawnGhost();
  }
}
function spawnGhost() {
  ghost = { x: random(40, width - 40), y: random(40, height - 40) };
}

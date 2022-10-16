let stars = []
let bg


function preload(){
  bg = loadImage("bg.jpg")
}

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(bg); 

  for(let star of stars){
    noStroke()
    circle(star.x,star.y,4)
  }
}

function addStar(){
  let star = {
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight - 200
  }
  stars.push(star)
}

for (let i = 0; i < 200; i++) {
  addStar()
}


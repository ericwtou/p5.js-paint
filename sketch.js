let weight = 5
let lineWeightUp = true
let hue = 0
let prevX = 0
let prevY = 0

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
  background(255)
}

function draw() {
  if (!mouseIsPressed) return

  colorMode(HSB)
  hue = hue >= 360 ? 0 : hue + 1
  stroke(hue, 100, 100)

  if (weight >= 50){
    lineWeightUp = false
  } else if (weight <= 5){
    lineWeightUp = true
  }
  lineWeightUp ? weight++ : weight--
  strokeWeight(weight)
  strokeCap(ROUND)
  strokeJoin(ROUND)
  console.log(lineWeightUp)
  console.log(weight)

  line(prevX, prevY, mouseX, mouseY)
  prevX = mouseX
  prevY = mouseY
}

function mousePressed(){
  prevX = mouseX
  prevY = mouseY
}

function doubleClicked(){
  background(255)
}
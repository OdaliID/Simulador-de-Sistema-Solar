let sol


function setup() {
    createCanvas(windowWidth, windowHeight)
    sun = new Astro(planets.sun)
    sun.spawnPlanetas()
}

function draw() {
    background(0)
    translate(width/2, height/2)
    sun.show()
    sun.orbit()
}

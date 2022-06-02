
var trex, trex_running;
var edges
function preload(){
 
  trex_running  = loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup() {
 
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(51, 178, 10, 40)
  trex.addAnimation("trexrunning", trex_running)
  trex.scale = 0.5

  edges= createEdgeSprites()
 
 
}

function draw(){
  background("cyan")

  if (keyDown('space') && trex.y > 160) {
   trex.velocityY = -10 
  }
  
  trex.velocityY = trex.velocityY + 0.8

  trex.collide(edges[3])

  drawSprites()

}

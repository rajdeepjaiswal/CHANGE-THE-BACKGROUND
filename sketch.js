var circle;
function setup() {
  createCanvas(765,765);

}

function draw() {
   if(World.mouseX<=255){
      background(World.mouseX,0,0);
    }else if(World.mouseX>255&&World.mouseX<510){
      background(0,(World.mouseX-155),0);
    }else{
      background(0,0,((World.mouseX-410)));
    }
      ellipse(World.mouseX,World.mouseY,30);
    drawSprites();
}
var canvas;
var music;
var surface;
var box1,box2,box3,box4;
var surface;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(95,590,190,20);
box1.shapeColor="blue";
box2=createSprite(295,590,190,20);
box2.shapeColor="orange";
box3=createSprite(495,590,190,20);
box3.shapeColor="purple";
box4=createSprite(695,590,190,20);
box4.shapeColor="green";

surface=createSprite(667,100,20,20);
surface.shapeColor="white";
surface.x=random(20,750);
surface.velocityX=7;
surface.velocityY=-9;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
surface.bounceOff(edges);


if(surface.isTouching(box1) && surface.bounceOff(box1)){
music.play()
surface.shapeColor="blue";
    //add condition to check if box touching surface and make it box
    
}
if(surface.isTouching(box2)){
    music.stop()
    surface.shapeColor="orange";
       surface.setVelocity(0,0);
    }
if(surface.isTouching(box3) && surface.bounceOff(box3)){
music.play()
surface.shapeColor="purple";

    //add condition to check if box touching surface and make it box
}
if(surface.isTouching(box4) && surface.bounceOff(box4)){
music.play()
surface.shapeColor="green";
// and make it box
}
drawSprites();
}
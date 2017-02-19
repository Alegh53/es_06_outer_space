var state;
var img1;
var img2;

function preload() {
  img1 = loadImage("img_sx.jpg");
  img2 = loadImage("img_dx.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight); 
  
}

function draw() {
  
  //imageMode(CENTER);
  background(img1);  
    
  if (state === true) {
        background(img2);
        tint(144, 44, 218);
    fill(172,221,231);
    textFont('Helvetica');
    textAlign(CENTER);
    textStyle(NORMAL);
    textSize(height/3);
    text(hour(),width/2,height/3-height/25);
    text(minute(),width/2,height/3*2-height/25);
    textStyle(BOLD);
    text(second(),width/2,height-height/25);
          
    } else {
        background(img1);
        tint(172,221,231);
        fill(144, 44, 218);
    textFont('Helvetica');
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(height/3);
    text(hour(),width/2,height/3-height/25);
    text(minute(),width/2,height/3*2-height/25);
    textStyle(NORMAL);
    text(second(),width/2,height-height/25);
    }  
    

}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}

function mouseClicked() {
    if (state===true) {
        state=false; 
    } else { 
        state=true;
    }
        }
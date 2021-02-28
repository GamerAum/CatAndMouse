var canvas,vg,Tom,TomImg1,TomImg2,TomImg3,jerry,jerryImg1,jerryImg2,jerryImg3
function preload() {
    //load the images here
    vg=loadImage('images/garden.png');
    TomImg1=loadAnimation('images/cat1.png');
    TomImg2=loadAnimation("images/cat2.png",'images/cat3.png');
    TomImg3=loadAnimation('images/cat4.png');
    jerryImg1=loadAnimation('images/mouse1.png');
    jerryImg2=loadAnimation("images/mouse2.png",'images/mouse3.png');
    jerryImg3=loadAnimation('images/mouse4.png');


}

function setup(){
    createCanvas(1000,800);
    Tom=createSprite(870,600);
    Tom.addAnimation('sleeping',TomImg1);
    Tom.scale=0.2
    //create tom and jerry sprites here
    jerry=createSprite(200,600);
    jerry.addAnimation('standing',jerryImg1);
    jerry.scale=0.1;
}

function draw() {

    background(vg);
    //Write condition here to evalute if tom and jerry collide
    if(Tom.x-jerry.x < (Tom.width-jerry.width)/2){
        Tom.velocityX=0;
        Tom.addAnimation('lastImg',TomImg3);
        Tom.x=300;
        Tom.scale=0.2;
        Tom.changeAnimation('lastImg');
        jerry.addAnimation('jerrylastImg',jerryImg3);
        jerry.changeAnimation('jerrylastImg');
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    Tom.velocityX=-5;
    Tom.addAnimation('running',TomImg2);
    Tom.changeAnimation("running");
    jerry.addAnimation("Teasing",jerryImg2);
    jerry.changeAnimation('Teasing');
}

}

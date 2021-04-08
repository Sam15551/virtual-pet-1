//Create variables here
var dgImage
var happyDogImage
var database,food ,foodStock
var dog

function preload()
{
	//load images here
  dgImage=loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");
  
}

function setup() {
	createCanvas(500, 500);
 
  dog = createSprite(250,250,50,50);
  dog.addImage("dogImage",dgImage);
  dog.scale = 0.5;
  database = firebase.database()
  foodStock = database.ref('food');
  foodStock.on("value",readStock);

}


function draw() {  
   background(46,139,87);
   if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage("dogImage",happyDogImage);
   }
  drawSprites();
  //add styles here
  stroke(1);
  textSize(15);
  fill("white");
  text("NOTE:press up-arrow key to feed doggo",220,20);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref("/").update({
    food:x
  })
}



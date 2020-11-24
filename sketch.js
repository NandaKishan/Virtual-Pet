//Create variables here
var dog,happyDog;
var foodS,foodStock;
var database;
var dogIMG,happyDogIMG;

function preload()
{
  //load images here
  dogIMG = loadImage("images/dogImg.png");
  happyDogIMG = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  // background(46, 139, 87);
  
  dog = createSprite(width/2,height/2);
  dog.addImage(dogIMG);
  dog.scale = 0.5;

  database = firebase.database();
  foodStock = database.ref('FOOD');
  foodStock.on('value',readStock);
}


function draw() { 
  background(46, 139, 87); 
  if(keyWentDown(UP_ARROW) && foodS !== undefined){
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
  console.log("foodS" + foodS);
}

function writeStock(x) {
  console.log(x);
  database.ref('/').update({
    FOOD : x
  })
}
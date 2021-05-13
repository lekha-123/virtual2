var dog, happydog,database, foodS,foodStock;
var dogimage,dogimage1;
var lastfed, fedtime, foodobj,butadd,butfeed

function preload()
{
	//load images here
  dogimage=loadImage('dogimg.png')
  dogimage1=loadImage('dogimg1.png')
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(350,350,50,50)
  dog.addImage(dogimage);
  dog.scale=0.5;
  database=firebase.database();
  foodobj= new Food();
  foodStock=database.ref("/food");
        foodStock.on("value",function(data){
        foodS=data.val();
foodobj.updatefoodstock(foodS);
      }) 

      butadd=createButton("add the food");
      butadd.position(600,200);
      butadd.mousePressed(addfood);

      butfeed=createButton("feed dog");
      butfeed.position(700,200);
      butfeed.mousePressed(feeddog);

      fedtime=database.ref("/lastfed");
fedtime.on("value",function(data){
  lastfed=data.val();
});
}


function draw() {  
background(46,139,87);

foodobj.display();


  drawSprites();

  
  textSize(30);
  fill ("red");
  if(lastfed>=12)
  {
    text("last feed:"+ lastfed%12+"pm",450,50)
  }
  else if(lastfed==0)
  {
    text("last feed:"+"12 am",450,50)
  }
  else
  {
    text("last feed:"+ lastfed+"am",450,50)
  }
text("food remaining: "+foodS, 20,50);
}

function feeddog()
{
  dog.addImage(dogimage1);
 foodobj.updatefoodstock(foodobj.getfoodstock()-1)
  database.ref('/').update({
    food:foodobj.getfoodstock(),
   lastfed:lastfed
  })

}


function addfood()
{
  foodS++
  database.ref('/').update({
    food:foodS
  })
}



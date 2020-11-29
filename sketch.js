var car1,car2,car3 ,wall1,wall2,wall3,car1;
line1,line2,line3;
var deform,deform2,deform3,weight,speed,weight2,speed2,weight3,speed3;

function preload(){

}

function setup() {
  createCanvas(800,400);
  car1 =createSprite(60,50,15,15)
car2=createSprite(60,150,15,15)
car3=createSprite(60,250,15,15)
  line1=createSprite(400,100,900,10)
  line2=createSprite(400,200,900,10)
  line3=createSprite(400,300,900,10)
  wall1=createSprite(760,50,15,70)
  wall2=createSprite(760,150,15,70)
  wall3=createSprite(760,250,15,70)
}

function draw() {
  background(221,221,221);  
  //weight and speed for first car
  weight=2260
speed=60
//weight and speed for 2nd car
weight2=1522
speed2=50
//weight and speed for 3rd car
weight3=3000
speed3=45
   car1.velocityX = 4;
   car2.velocityX=4;
   car3.velocityX=4
   if((wall1.x-car1.x<car1.width/2+wall1.width/2)){
     deform=0.5*weight*speed*speed/22500
    car1.velocityX=0


    if((deform<200)&&deform>100){
      car1.shapeColor='red'
    }
    if((deform<100)&&deform>50){
      car1.shapeColor='green'
    }
    if((deform<160)&&deform>100){
      car1.shapeColor='yellow'
    }
  }
  
if(wall2.x-car2.x<car2.width/2+wall2.width/2){
  deform2=0.5*weight2*speed2*speed2/22500
  car2.velocityX=0
  if(deform2<200&&deform2>100){
    car2.shapeColor='red'
  }
  if(deform2<120&&deform2>0){
    car2.shapeColor='green'
  }
  if(deform2<160&&deform2>100){
    car2.shapeColor='yellow'
  }
}
 if((wall3.x-car3.x<car3.width/2+wall3.width/2)){
  deform3=0.5*weight3*speed3*speed3/22500
 car3.velocityX=0


 if((deform3<200)&&deform3>100){
   car3.shapeColor='red'
 }
 if((deform3<120)&deform3>0){
   car3.shapeColor='green'
 }
 if((deform3<160)&&deform3>100){
   car3.shapeColor='yellow'
 }
}
 
 textSize(24)
 text("wall1 = Zenia ",200,50)
 text("wall2 =  Tourus ",200,150)
 text("wall3 = Cyclap ",200,250)
  drawSprites();
}
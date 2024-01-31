var ground, lander, bgImg, landerImg, bg1, bg1Img
var asteroid, asteroidImg
var obstaclesGroup
var gameState = "play"
var flag = 1
var vx = 0
var vy = 0
var g = 0.01

function preload(){
    landerImg = loadImage("normal.png")
    bgImg = loadImage("bg.png")
    bg1Img = loadImage("bg1.jpeg")
    asteroidImg = loadImage("asteroid_2.png")
    //thrustImg = laodAnimation("b_thrust_1.png", "b_thrust_2.png","b_thrust_3.png")
   // thrusterImg = laodAnimation("right_thruster_1.png","right_thruster_2.png","left_thruster_1.png","left_thruster_2.png")
   // landingImg = laodAnimation("landing1.png","landing2.png","landing_3.png")
    //crashImg = laodAnimation("crash1.png","crash2.png","crash3.png")
}

function setup(){
    createCanvas(1000,700)

    bg1 = createSprite(500, 350, 1000,700)
    bg1.addImage(bg1Img)
    bg1.velocityY = 0.3

   textSize(25)

   ground = createSprite(500,735,1000,20)

   lander = createSprite(300,500,20,20)
   lander.addImage(landerImg)
   lander.scale = 0.3

   obstaclesGroup = createGroup();

   
}

function draw(){
    background("#040720")
    // image(bgImg,0,0)
    push()
    fill(255)
    text("vertical velocity:" +round(vy), 750,40)
    pop()

    lander.collide(ground)

    if (gameState === "play") {
        if(keyDown("left_arrow")){
          lander.x = lander.x - 3;
          console.log("Left arrow is pressed")
        }
        
        if(keyDown("right_arrow")){
          lander.x = lander.x + 3;
          console.log("Right arrow is pressed")
        }
        
        if(keyDown("space")){
          lander.velocityY = -10;
          console.log("Space is pressed")
        }
        
        lander.velocityY = lander.velocityY + 0.8
    
        if(obstaclesGroup.isTouching(lander)){
            lander.velocityY = 0
            gameState = "end" 
            console.log("Colliding")
          }
 }

        else if(gameState === "end"){
            text("Mission unaccomplished", 300, 300)
            console.log("Game State End")
        }  

        spawnAsteroids()
        drawSprites()
    
    }
    // if(bg1.y > 400){
    //     bg1.y = 300
    //  }
   

 function spawnAsteroids(){
    if (frameCount % 80 === 0) {
        x = Math.round(random(50,1000));
        y = Math.round(random(50,300));

    asteroid = createSprite(x,y,40,50)
    asteroid.addImage(asteroidImg)
    asteroid.scale = 0.45

    vx = Math.round(random(3, 10))
    vnx = Math.round(random(-3, -10))
    vy = Math.round(random(3, 10))
    if(flag == 1){
        asteroid.velocityX = vx
        asteroid.velocityY = vy
            flag = 2
    console.log(flag)
    }else{
    //if(flag == 2){
        asteroid.velocityX = vnx
        asteroid.velocityY = vy
            flag = 1
    }
    console.log(flag)

    lander.depth = asteroid.depth;
         lander.depth +=1;
       
    obstaclesGroup.add(asteroid);
    }
       
 }
    
    






    // if (frameCount % 240 === 0) {
    //     var door = createSprite(200, -50);
    //     var climber = createSprite(200,10);
    //     var invisibleBlock = createSprite(200,15);
    //     invisibleBlock.width = climber.width;
    //     invisibleBlock.height = 2;
        
    //     door.addImage(doorImg);
    //     climber.addImage(climberImg);
        
    //     door.velocityY = 1;
    //     climber.velocityY = 1;
    //     invisibleBlock.velocityY = 1;
        
    //     ghost.depth = door.depth;
    //     ghost.depth +=1;
       
    //     //assign lifetime to the variable
    //     door.lifetime = 800;
    //     climber.lifetime = 800;
    //     invisibleBlock.lifetime = 800;
    
        
    //     //add each door to the group
    //     doorsGroup.add(door);
    //     invisibleBlock.debug = true;
    //     climbersGroup.add(climber);
    //     invisibleBlockGroup.add(invisibleBlock);
    //   }

     // if(keyDown("space")){
    //     lander.velocityY = -5.5
    // }
    // if(keyIsDown("left_arrow")){
    //     lander.x = lander.x + -5.5
    // }
    // if(keyIsDown("right_arrow")){
    //     lander.x = lander.x + 5.5
    // }


    //     lander.velocityY = -6
//     vy += g
//     lander.position.y += vy
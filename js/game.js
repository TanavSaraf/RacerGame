class Game
{
    constructor()
    {
        
    }
    getState()
    {
         var gameRef=db.ref("gameState");
         gameRef.on("value",function(data){
            gameState = data.val();
         })
        
    }
    update(state)
    {
        db.ref("gameState").set(state)
    }
  async  start()
    {
        if(gameState===0)
        {
            player=new Player();
            var playerCountRef=await db.ref("playerCount").once("value");
            if(playerCountRef.exists())
            {
                playerCount=playerCountRef.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
        car1=createSprite(300,200)
        car2=createSprite(400,200)
        car3=createSprite(500,200)
        car4=createSprite(600,200)
        cars=[car1,car2,car3,car4]
        car1.addImage(car1Img);
        car2.addImage(car2Img);
        car3.addImage(car3Img);
        car4.addImage(car4Img);
    }
    play()
    {
        
        form.hide();
        
        Player.getPlayersInfo()
        if(allPlayers !== undefined )
        {
            var y = 200;
            var x = 200;
            var index = 0; 
            background(groundImg)
            image(trackImg,0,-displayHeight*6,displayWidth,displayHeight*7)
            for(var p in allPlayers){
                
                x+=200; 
                index+=1;
                y=allPlayers[p].distance * (-1) + displayHeight
                cars[index-1].x=x;
                cars[index-1].y=y;

               
                if(index===player.index)
                {
                    cars[index-1].shapeColor="Red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y
                }
               
            }
        }
        if(keyDown(UP_ARROW)&&player.index!==null)
        {
            player.distance+=10;
            player.update()
        }
        if(player.distance>=5750)
        {
            gameState=2;
        }
        drawSprites()

    }
    end()
    {
        console.log("GameEnd"+player.name);
    }
}
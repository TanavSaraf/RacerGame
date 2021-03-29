class Form
{
    constructor(){
        this.button=createButton("Start");
       this.input=createInput("name");
        this.greeting = createElement("h2");
    }
    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h1","Car Racing Game")
        title.position(displayWidth/3,0);
       
        this.input.position(displayWidth/3,displayHeight/3 + 60);
        
        this.button.position(displayWidth/3,displayHeight/3+30);

        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();
            playerCount+=1
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/3,displayHeight/5);
        })
    }
}
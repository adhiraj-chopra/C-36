 class Form{
     constructor(){}
     display(){
     var title = createElement("h2");
     title.html("Car Racing")
     title.position(120,10);

     var input = createInput("NAME");
     var button = createButton("JOIN GAME")
     var greeting = createElement("h3")
     
     input.position(200,240);
     button.position(300,240);
     button.mousePressed(function(){
         input.hide();
         button.hide();
         var name = input.value();   
         playerCount = playerCount+1;
         player.update(name);
         player.updateCount(playerCount);
         greeting.html("WELCOME "+name);
         greeting.position(200,240);
     });
     }

 }


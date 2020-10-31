class Form
{
    constructor()
    {

    }

    display()
    {
        var title = createElement("h1");
        title.html("Multiplayer Game");
        title.position(130,0);

        var input = createInput("name");
        input.position(530,160);

        var button = createButton("Play");
        button.position(550,200);
        var greeting = createElement("h2");
        button.mousePressed(function()
        {
            input.hide();
            button.hide();

            var newName = input.value();
            playerCount += 1;
            player.update(newName);
            player.updateCount(playerCount);

            
            greeting.html("Hello " + newName);
            greeting.position(530,160);

        })

    }



}
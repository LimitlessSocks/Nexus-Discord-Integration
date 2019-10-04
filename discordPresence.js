
//var x = document.createElement("IMG");
 // x.setAttribute("src", "https://cdn.discordapp.com/attachments/465278458986102786/629582146821947392/unknown.png");
 // x.setAttribute("id", "service_logo");
  //x.setAttribute("style", "display:none");
  //document.body.appendChild(x);

timestamp = new Date().getTime() / 1000

presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
    if (document.location.pathname == "/home") {
        if (document.getElementsByTagName("p")[1].innerHTML.includes("Welcome back")){
            text=document.getElementsByTagName("p")[1].innerHTML
        }   
        else {
            text = document.getElementsByTagName("p")[3].innerHTML
        }
        let presenceData = {
            details: "Online as "+text.replace("Welcome back, ",''),
            state: "waiting in lobby",
            //largeImageKey: "banner",
            largeImageKey: "banner",
            largeImageText: "https://duelingnexus.com",
            smallImageKey: "logo",
            smallImageText: "in game"
        };

        presence.setActivity(presenceData);
    }
    else if (document.location.pathname == "/decks") {
        let presenceData = {
            details: "Online on Duelingnexus",
            state: "Looking at decklists",
            largeImageKey: "banner",
            largeImageText: "https://duelingnexus.com",
            smallImageKey: "logo",
            smallImageText: "in game",
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.includes("/editor")) {
        d = document.getElementsByTagName("strong")[0].innerText
        let presenceData = {
            details: "Building Decks",
            state: "Editing: "+d,
            largeImageKey: "banner",
            largeImageText: "https://duelingnexus.com",
            smallImageKey: "logo",
            smallImageText: "in game",
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.includes("/game")) {
        opponent = document.getElementById("game-opponent-name").innerText
        mylife = document.getElementById("game-life-player").innerText 
        opplife = document.getElementById("game-life-opponent").innerText 
        if (parseInt(mylife)>parseInt(opplife)){
            status = "Beating "+ opponent
        }
        else if (parseInt(mylife) == parseInt(opplife)){
            status = "Dueling "+ opponent
        }
        
        else {
            status = "Losing to "+opponent
        }
         if ((parseInt(mylife) == 0) && (0==parseInt(opplife))) {
            status = "Waiting for "+ opponent
        }

        let presenceData = {
            details: status,
            state: `Current lp: ${mylife}, Opponent LP: ${opplife}`,
            largeImageKey: "banner",
            largeImageText: "https://duelingnexus.com",
            smallImageKey: "logo",
            smallImageText: "in game",
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.includes("/hostgame")) {
        let presenceData = {
            details: "Hosting a Game",
            state: "at the custom game menu",
            largeImageKey: "banner",
            largeImageText: "https://duelingnexus.com",
            smallImageKey: "logo",
            smallImageText: "in game",
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.includes("/gamelist")) {
        let presenceData = {
            details: "Looking for Game",
            state: "at All game list",
            largeImageKey: "banner",
            largeImageText: "https://duelingnexus.com",
            smallImageKey: "logo",
            smallImageText: "in game",
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.includes("/profile")) {
        let presenceData = {
            details: "Editing Profile",
            state: "changing stuffs",
            largeImageKey: "banner",
            largeImageText: "https://duelingnexus.com",
            smallImageKey: "logo",
            smallImageText: "in game",
        };
        presence.setActivity(presenceData);
    }
    else if (document.location.pathname.includes("/duel")) {
        let presenceData = {
            details: "Searching for Duels",
            state: "Choosing game mode",
            largeImageKey: "banner",
            largeImageText: "https://duelingnexus.com",
            smallImageKey: "logo",
            smallImageText: "in game",
        };
        presence.setActivity(presenceData);
    }
    
}));

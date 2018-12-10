let  character = {    // maken var
    naam : "Tommy",  // eigenschappen meegeven aan object
    age : 23,        // eigenschap van object
    items : ["GSM", "laptop"], // eigenschap van object in array
    giveitem : function(){  // naam : fucntie met uit te voeren blok code
    console.log(this.items[Math.floor(Math.random() * this.items.length)])
    }
} 


character.giveitem() //methode aanroepen



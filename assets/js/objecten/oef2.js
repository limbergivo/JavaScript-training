function Wapen(naam, atk, magicAtk, required,stock){
    this.title = naam;  // eigenschappen van function wapen
    this.physic = atk;
    this.magic = magicAtk;
    this.minLevel = required;
    this.available = stock;
}

let bijl = new Wapen("butcher cleave", 20, 0, 25, false);  // vars wat items aanmaakt
let scepter = new Wapen("tal rashsa", 5, 35, 15, true);
let zwaard = new Wapen("Ashbringer", 30, 5, 60, true);
//construct waarin 3 objecten zitten

let shop = [bijl, scepter, zwaard];
for (i = 0; i < shop.length; i++){
    console.log(shop[i])
}

for (i = 0; i < shop.length; i++){
    if ( shop[i].available){
    console.log(shop[i]);
}
}

for (i = 0; i < shop.length; i++){
    if ( shop[i].minLevel >= 10){
    console.log(shop[i]);
}
}
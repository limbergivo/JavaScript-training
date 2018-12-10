function mainCharacter(naam, hp, lvl, weapon){
    this.title = naam;  // eigenschappen van function wapen
    this.hitpoints = hp;
    this.level = parseInt(lvl);
    this.attack = function(){
        return (this.level * weapon.damage);}
};

function weapon(item, damage){
    this.name = item; 
    this.damage = parseInt(damage);
};



let weaponTalrashsa = new weapon("tal rashsa", 50);
let mainPerson = new mainCharacter("wizzard", 200, 20, weaponTalrashsa);  // vars wat items aanmaakt
//construct waarin 2 objecten zitten

console.log(mainPerson.title,"aanval met",weaponTalrashsa.name,"de schade is",mainPerson.attack());

let antwoord = prompt("kies uit een taal? fr , nl of en");
let bericht = "Verkeerde taal";
if (antwoord === "fr"){
    bericht = "Bonjour tout le monde";
}
else if (antwoord === "nl") {
    bericht = "hallo iedereen!";
}
else if (antwoord === "en") {
    bericht = "hello, world";
}
console.log(bericht);
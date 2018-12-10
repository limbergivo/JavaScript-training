let floatSpeed = 10.4; // aangemaakte var
let lowSpeed = Math.floor(floatSpeed) // floor = naar onder afronden 
let highSpeed = Math.ceil(floatSpeed) // ceil = naar boven afronden
console.log(floatSpeed, highSpeed, lowSpeed) // toon in console

Math.random()
console.log(Math.random())
// willekeurige waarde tussen 0 -1

Math.random()* 10;
console.log(Math.random()* 10)
// random getal tussen 0 tot 10

Math.random()* 50 + 50;
console.log(Math.random()* 50 + 50)
// getal tussen 50 en 100 random pakken=; () * 50 + 50

let namen = ['Goro', 'Johnny Cago', 'Kano, Liu Kano', 'Raiden', 'Raptile', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];
namen[Math.floor(Math.random() * namen.length)];// willekeurige naam zoeken in array
console.log(namen[Math.floor(Math.random() * namen.length)]) // tonen in log
// gebruikten object Math.floor(Math.random()) 

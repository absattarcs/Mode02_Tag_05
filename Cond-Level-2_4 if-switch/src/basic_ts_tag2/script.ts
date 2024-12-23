// Zufallszahlen zwischen 1 und 77 generieren
const randomNumber1: number = Math.floor(Math.random() * 77) + 1;
const randomNumber2: number = Math.floor(Math.random() * 77) + 1;

// Ausgabe der Zahlen
console.log(`Erste Zahl: ${randomNumber1}, Zweite Zahl: ${randomNumber2}`);

// Logik mit switch
switch (true) {
    case randomNumber1 === randomNumber2:
        console.log("Was für ein Zufall");
        break;
    case randomNumber1 > randomNumber2:
        console.log("Erste Zahl größer");
        break;
    case randomNumber2 > randomNumber1:
        console.log("Zweite Zahl größer");
        break;
}

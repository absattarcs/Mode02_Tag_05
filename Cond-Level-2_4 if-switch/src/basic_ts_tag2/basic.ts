// Zufallszahlen zwischen 1 und 77 generieren
const randomNumber1: number = Math.floor(Math.random() * 77) + 1;
const randomNumber2: number = Math.floor(Math.random() * 77) + 1;

// Ausgabe der Zahlen
console.log(`Erste Zahl: ${randomNumber1}, Zweite Zahl: ${randomNumber2}`);

// Logik mit if-else
if (randomNumber1 === randomNumber2) {
    console.log("Was für ein Zufall");
} else if (randomNumber1 > randomNumber2) {
    console.log("Erste Zahl größer");
} else {
    console.log("Zweite Zahl größer");
}



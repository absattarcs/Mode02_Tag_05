
// Player information
let johnHeight: number = 170;
let johnAge: number = 22;
let meikeHeight: number = 168;
let meikeAge: number = 34;

// Points calculation
let johnPoints: number = johnHeight + (johnAge * 5);
 console.log("John score :" +" "+ johnPoints);
let meikePoints: number = meikeHeight + (meikeAge * 5);
console.log("Meike score :" +" "+ meikePoints);

// Determine the winner
if (johnPoints > meikePoints) {
    console.log(`John gewinnt das Spiel mit ${johnPoints} Punkten!`);
   

} else if (meikePoints > johnPoints) {
    console.log(`Meike gewinnt das Spiel mit ${meikePoints} Punkten!`);
} else {
    console.log(`Es ist ein Unentschieden! beide haben ${johnPoints} Punkten.`);
}

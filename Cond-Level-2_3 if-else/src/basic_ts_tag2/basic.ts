
function calculateDifferenceAndProcess(number: number){
    const targetNumber: number = 27;
    const difference: number = Math.abs(number - targetNumber); 
    
   
    let result: number;

    if (difference > 27) {
        result = difference * 2; 
    } else {
        result = difference; 
    }

    console.log(`Die Differenz zwischen ${number} und ${targetNumber} ist ${difference}. Ergebnis: ${result}`);
}


calculateDifferenceAndProcess(35);
calculateDifferenceAndProcess(74);
calculateDifferenceAndProcess(123);
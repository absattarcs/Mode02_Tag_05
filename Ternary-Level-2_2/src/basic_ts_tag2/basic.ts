
const isOnline: boolean = Math.random() > 0.5;
const isPremiumUser: boolean = Math.random() > 0.5;
const isAdult: boolean = Math.random() > 0.5;


console.log(isOnline ? "online" : "offline");


const monthlyFee: number = isPremiumUser ? 19.99 : 12.99;
console.log(`Monatsgebühr: ${monthlyFee}`);


isAdult ? window.confirm("Willkommen") : window.alert("Keine Berechtigung");


const randomAge: number = Math.floor(Math.random() * 121); 
const randomSalary: number = Math.floor(Math.random() * 15001); 


const isMiddleAged: boolean = randomAge >= 40 && randomAge <= 65 ? true : false;
console.log(`Alter: ${randomAge}, Mittleres Alter: ${isMiddleAged}`);


console.log(
    randomSalary > 10000
        ? "You are rich"
        : randomSalary > 1500
        ? "Not too bad"
        : "Not that much"
);

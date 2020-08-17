// Funciones  flecha
// Funciones en ES5
const year = [2000, 2005, 2007, 2015];
let edad = year.map(function(el){
    return 2020 - el;
})
console.log(edad);

// Funciones flecha ES6 
let edad6 = year.map((el) => {
    return 2020 - el;
})
console.log(edad6);

// Para reducir codigo tambien se puede hacer esto
let edad7 = year.map(el => 2020 - el);
console.log(edad7);
const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
let incremented = numbers.map(function(numeri){
    return numeri+1
})

console.log(incremented);

// Risultato: [3, 9, 5, 8, 3, 88]
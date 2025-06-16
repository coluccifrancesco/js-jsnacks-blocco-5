const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
console.log(names);

names.forEach((nomi, i, names) => {
    console.log(nomi);
})

for (let i = 0; i < names.length; i++) {
    const nomi = names[i];
    console.log(nomi);
}

// Risultato: 'Edoardo', 'Simone', 'Francesco'
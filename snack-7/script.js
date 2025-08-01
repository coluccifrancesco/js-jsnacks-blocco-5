const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
console.log(students[1]);

let id2 = students.filter(student => student.id === 2)
console.log(id2);

let findId2 = students.find(student => student.id === 2)
console.log(findId2);

// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }
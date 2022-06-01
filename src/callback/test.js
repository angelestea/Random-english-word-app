// const heroes = [
//     {
//         id: 1,
//         name: 'Batman',
//         owner: 'DC'
//     },
//     {
//         id: 2,
//         name: 'Spiderman',
//         owner: 'Marvel'
//     },
//     {
//         id: 3,
//         name: 'Superman',
//         owner: 'DC'
//     },
//     {
//         id: 4,
//         name: 'Flash',
//         owner: 'DC'
//     },
//     {
//         id: 5,
//         name: 'Wolverine',
//         owner: 'Marvel'
//     },
// ];


// const tst = "[1,2,3,4,5,6]"

// console.table(JSON.parse(tst))



let lines = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]

console.log(lines.map(item => item.split(' ').length).reduce((sum,item)=> (sum + item), 0))


function solution(lines) {
    // Tu código aquí 👈
    return lines.map(item => item.split(' ').length).reduce((sum,item)=> (sum + item), 0)
}; 

console.log(solution([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]));

const hi = 'hola'

const text = "Beautiful is better than ugly"
"Explicit is better than implicit",
"Simple is better than complex",
"Complex is better than complicated",


console.log(hi.length)


function solution(array) {
    // Tu código aquí 👈 
    return array.sort((a,b)=> a-b)
}; 

console.log(solution([3, 1, 11, 5, 2, 7, 8]))


function solution(array) {
    // Tu código aquí 👈 
    return array.sort((a,b) => a.length-b.length)
}; 

console.log(solution([
    "Hola",
    "Viajar",
    "Sol",
    "Aprender"
]));


function solution(array) {
    // Tu código aquí 👈 
    return array.sort((a,b) => b.dateOfBirth-a.dateOfBirth).map(item => item.name);
}; 

console.log(solution([
    {
      name: "Nicolas",
      dateOfBirth: new Date(1993, 6, 9),
    },
    {
      name: "Santiago",
      dateOfBirth: new Date(2018, 6, 11),
    },
    {
      name: "Zulema",
      dateOfBirth: new Date(1994, 10, 7),
    },
]))


function solution(array) {
    // Tu código aquí 👈 
    return array.map(element => element.split(' '));
}; 

console.log(solution([
    "Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Andrea Amador"
  ]));


function solution(array){
    return array.sort((a,b)=>{
        const lastNameA = a.split(' ')[1];
        console.log(lastNameA);
        const lastNameB = b.split(' ')[1];
        console.log(lastNameB);
        return lastNameA.localeCompare(lastNameB)
    })
}

console.log(solution([
    "Nicolas Molina",
    "Andrea Perez",
    "Zulema Vicente",
    "Juan Amador"
  ]));

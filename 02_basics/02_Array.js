const marvel_heros = ["ironman", "spiderman", "captainAmerica"]
const dc_heros = ["batman", "superman", "flash"]
const indian_heros = ["shaktiman", "naagraj"]

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros = [...marvel_heros, ...dc_heros, ...indian_heros]
// console.log(all_heros)

const another_Array = [1,2,3,4, [5,6], [3,4, [9,2]]]
const real_Array = another_Array.flat(Infinity)
//console.log(real_Array);

console.log(Array.from('ruman'));
console.log(Array.from({name: "ruman"}));

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3))

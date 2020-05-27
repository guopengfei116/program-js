import program from "./program.mjs"

const result = program(["a", " ", "c", "a", " ", "c"]);
console.log(result);

const result2 = program([" ", "a", "b", " "]);
console.log(result2);

const result3 = program([" ", " "]);
console.log(result3);

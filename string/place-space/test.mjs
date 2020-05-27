import program from "./program.mjs"

const result = program("a b a b");
console.log(result);

const result2 = program(" ab ");
console.log(result2);

const result3 = program("  ");
console.log(result3);

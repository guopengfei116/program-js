import program from "./program.mjs"

const result = program(["a", "b", "c", "a", "b", "c", "a", "b", "c", , , ,], 9, "b");
console.log(result);

const result2 = program(["a", "a", "b", "b", "c", "c", "a", "a", , , , ,], 8, "a");
console.log(result2);

const result3 = program(["a", "b", "a", , ,], 3, "a");
console.log(result3);

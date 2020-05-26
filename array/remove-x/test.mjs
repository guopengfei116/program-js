import program from "./program.mjs"

const result = program(["a", "b", "c", "a", "b", "c", "a", "b", "c"], "b");
console.log(result);

const result2 = program(["a", "a", "b", "b", "c", "c", "a", "a"], "a");
console.log(result2);

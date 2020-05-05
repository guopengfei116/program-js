import program from "./program.mjs"

const result = program(...["ABCBDAB", "BDCABA"]);
console.log(result);

const result2 = program(...["aaa", "aab"]);
console.log(result2);

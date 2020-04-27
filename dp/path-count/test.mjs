import pathCount from "./program.mjs"

const matrix = [
  [, , , , , , ,],
  [, ,0 , , , ,0 ,],
  [, ,, ,0 , , ,],
  [0, ,0 , , ,0 , ,],
  [, ,0 , , , , ,],
  [, , ,0 ,0 , ,0 ,],
  [, 0,, , ,0 , ,],
  [, , , , , , ,],
];

const matrix2 = [
  [, , ,],
  [, 0, ,],
  [, , ,],
];

pathCount(matrix, 8, 8);
console.log(matrix);

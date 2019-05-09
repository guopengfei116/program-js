export function printBinaryTree(tree) {

  let middle = Math.floor(tree.length / 2);
  let row = 0.5;

  // double growth
  for(var i = 1; i < tree.length; i += i) {
    const values = [];
    const spaces = '  '.repeat(middle);

    // current line begin to end
    for(var j = i - 1; j < i + i - 1; j++) {
      values.push(tree[j]);
    }

    row *= 2;
    middle = middle - row > 0 ? middle - row : 0;
    console.log(`${spaces}${values.join('，')}\r\n`);
  }
};

export function printHeap(heap) {
  printBinaryTree(heap.slice(1));
};

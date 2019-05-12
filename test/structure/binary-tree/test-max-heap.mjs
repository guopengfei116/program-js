import MaxHeap from '../../../structure/binary-tree/max-heap';
import { random, printHeap } from '../../../util';

// test insert
const maxHeap = new MaxHeap();
Array.from(Array(31)).forEach(() => {
  maxHeap.insert(random(-10, 10));
});
console.info('最大堆结构：');
printHeap(maxHeap.heap);

// test delete
const deleted = [];
Array.from(Array(31)).forEach(() => {
  deleted.push(maxHeap.delete());
});
console.info('最大堆取值：');
console.log(deleted.join(','));

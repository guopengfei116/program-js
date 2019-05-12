import MinHeap from '../../../structure/binary-tree/min-heap';
import { random, printHeap } from '../../../util';

// test insert
const minHeap = new MinHeap();
Array.from(Array(31)).forEach(() => {
  minHeap.insert(random(-10, 10));
});
console.info('最小堆结构：');
printHeap(minHeap.heap);

// test delete
const deleted = [];
Array.from(Array(31)).forEach(() => {
  deleted.push(minHeap.delete());
});
console.info('最小堆取值：');
console.log(deleted.join(','));

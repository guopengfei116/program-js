import { swapInArray } from '../../util/index';

/**
 * @Class 最小堆
 * 维护一个从小到大的完全二叉树，每次可取出一个最小值。
 * 在_shiftUp和_shiftDown操作时做了优化，先找到位置，再赋值。
 * 
 * @Method insert 插入一个数据
 * @Method delete 取出一个最小值
 */
export default class MinHeap {

  constructor() {
    this.heap = [null];
    this.count = 0;
  }

  _shiftUp(insertIndex, insertItem) {
    let parentIndex;

    while(insertIndex > 1 && insertItem < this.heap[parentIndex = Math.floor(insertIndex / 2)]) {
      this.heap[insertIndex] = this.heap[parentIndex];
      insertIndex = parentIndex;
    }
    this.heap[insertIndex] = insertItem;
  }

  _shiftDown(insertIndex, insertItem) {
    let childIndex = insertIndex * 2;

    while(childIndex <= this.count 
      && insertItem > this.heap[(childIndex = childIndex + 1 <= this.count && this.heap[childIndex + 1] < this.heap[childIndex] ? childIndex + 1 : childIndex)]) {
      this.heap[insertIndex] = this.heap[childIndex];
      insertIndex = childIndex;
      childIndex = insertIndex * 2;
    }
    this.heap[insertIndex] = insertItem;
  }

  insert(item) {
    this.heap.push(item);
    this.count++;

    this._shiftUp(this.count, item);
  }

  delete() {
    if (this.isEmpty()) return;

    swapInArray(this.heap, 1, this.count);
    const min = this.heap.pop();
    this.count--;

    this._shiftDown(1, this.heap[1]);

    return min;
  }

  isEmpty() {
    return this.count === 0;
  }

}

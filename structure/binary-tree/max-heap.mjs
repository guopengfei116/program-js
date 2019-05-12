import { swapInArray } from '../../util';

/**
 * @Class 最大堆
 * 维护一个从大到小的完全二叉树，每次可取出一个最大值。
 * 在insert和delete时swap操作可以优化，在最后一步swap。
 * 
 * @Method insert 插入一个数据
 * @Method delete 取出一个最大值
 */
export default class MaxHeap {

  constructor() {
    this.heap = [null];
  }

  insert(item) {
    let coord = this.heap.push(item) - 1;
    let parentCoord;

    // up: exist parent node && current > parent
    while(coord > 1 && this.heap[coord] > this.heap[(parentCoord = Math.floor(coord / 2))]) {
      swapInArray(this.heap, coord, parentCoord);
      coord = parentCoord;
    }
  }

  delete() {
    swapInArray(this.heap, 1, this.count());
    const max = this.heap.pop();

    let coord = 1;
    let childCoord;

    // down: exist child node on the left && current < max(left, right || 0)
    while(coord * 2 <= this.count() && this.heap[coord] < this.heap[(childCoord = coord * 2 + 1 <= this.count() && this.heap[coord * 2 + 1] > this.heap[coord * 2] ? coord * 2 + 1: coord * 2)]) {
      swapInArray(this.heap, coord, childCoord);
      coord = childCoord;
    }

    return max;
  }

  count() {
    return this.heap.length - 1;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

}

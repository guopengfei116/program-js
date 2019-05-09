import { swapInArray } from '../../util';

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
    while(this.heap[coord * 2] && this.heap[coord] < this.heap[(childCoord = this.heap[coord * 2] > (this.heap[coord * 2 + 1] || 0) ? coord * 2 : coord * 2 + 1)]) {
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

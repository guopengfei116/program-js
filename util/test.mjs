import { randomArrayFactory } from "./array.mjs";

export function testSortTime(sortName, program, arr) {
  console.time(sortName);
  program(arr);
  console.timeEnd(sortName);
}

export function testSort(sortName, program, dataSize = 10) {
  const arr = randomArrayFactory(dataSize, 0, 50);

  console.time(sortName);
  const sortedArr = program(arr);
  console.timeEnd(sortName);

  isSorted(sortedArr);
}

export function isSorted(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log(`排序失败: ${arr.join()}`);
      return false;
    }
  }

  console.log(`排序成功，取前10个数打印：${arr.slice(0, 10).join()}`);
  return true;
}

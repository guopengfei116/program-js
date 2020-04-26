import { random } from "./helper.mjs"

export function swapInArray(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

export function replaceInArray(arr, a, b) {
  const deleted = arr[a];
  arr[a] = arr[b];
  delete arr[b];

  return deleted;
}

export function randomArrayFactory(n, min, max) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(random(min, max));
  }

  return arr;
}

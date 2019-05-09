export * from './print';

export function swapInArray(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

export function replaceInArray(arr, a, b) {
  const deleted = arr[a];
  arr[a] = arr[b];
  delete arr[b];
  return deleted;
};

// return: [min, ..., max)
export function random(min, max) {
  return min + Math.floor(Math.random() * (max - min));
};

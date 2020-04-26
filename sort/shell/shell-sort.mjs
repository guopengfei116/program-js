export default function shellSort(arr) {
  let step = arr.length;
  while(step = Math.floor(step / 8)) {
    console.log(step)

    for (let i = 0, len = arr.length; i < len; i += step) {
      for (let j = i; j >= step; j -= step) {

        if (arr[j] < arr[j - step]) {
          const temp = arr[j];
          arr[j] = arr[j - step];
          arr[j - step] = temp;
        } else {
          break;
        }
      }
    }
  }

  return arr;
}

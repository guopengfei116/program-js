/**
 * 两个有序数组合并为一个有序数组
 */
export default function mergeOrderlyArray(arrL, arrR) {
  if (!arrL && arrR) return arrR;
  if (!arrR && arrL) return arrL;

  const mergedArr = [];
  let l = 0, r = 0;

  for (let i = 0, len = arrL.length + arrR.length; i < len; i++) {
    // arrL finished
    if (l >= arrL.length) {
      mergedArr.push(arrR[r]);
      r++;
      continue;
    }

    // arrR finished
    if (r >= arrR.length) {
      mergedArr.push(arrL[l]);
      l++;
      continue;
    }

    if (arrL[l] < arrR[r]) {
      mergedArr.push(arrL[l]);
      l++;
    } else {
      mergedArr.push(arrR[r]);
      r++;
    }
  }

  return mergedArr;
};

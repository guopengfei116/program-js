import mergeOrderlyArray from '../../../algorithm/merge/merge-orderly-array';

const testCase = {
  case1: [
    [1, 3, 5, 7, 9, 11],
    [2, 4, 6, 8, 10],
  ],
  case2: [
    [1, 3, 5, 7, 9, 11],
    [2],
  ],
  case3: [
    [1],
    [2, 4, 6, 8, 10],
  ],
  case4: [
    [1],
    [2],
  ],
  case5: [
    [1],
    [],
  ],
  case6: [
    [],
    [2],
  ],
};

const testResults = Object.keys(testCase).map(key => {
  return [...testCase[key][0], ...testCase[key][1]].filter(Boolean).sort((a, b) => a > b ? 1 : -1 );
});

Object.keys(testCase).forEach((key, index) => {
  const mergedArr = mergeOrderlyArray(testCase[key][0], testCase[key][1]);
  console.info(`
    合并结果：${mergedArr.join(',')}
    正确性：${mergedArr.join(',') === testResults[index].join(',')}
  `);
});

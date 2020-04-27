export default function (paths, row, col) {
  // 终点初始值为1
  paths[row-1][col-1] = 1;

  // 最后一列不是0就是1
  for (let i = row - 2; i >= 0; i--) {
    if (paths[i + 1][col - 1] && paths[i][col - 1] !== 0) {
      paths[i][col - 1] = 1;
    } else {
      paths[i][col - 1] = 0;
    }
  }

  // 最后一行不是0就是1
  for (let i = col - 2; i >= 0; i--) {
    if (paths[row - 1][i + 1] && paths[row - 1][i + 1] !== 0) {
      paths[row - 1][i] = 1;
    } else {
      paths[row - 1][i] = 0;
    }
  }

  // 递推其他路径
  for (let i = row - 2; i >= 0; i--) {
    for (let j = col - 2; j >= 0; j--) {
      if (paths[i][j] !== 0) {
        paths[i][j] = paths[i+1][j] + paths[i][j+1];
      }
    }
  }

  return paths;
}

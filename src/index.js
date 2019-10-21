module.exports = function solveSudoku(matrix) {
  solve(matrix);
  return matrix;
};
function checkSector(board, row, col, value) {
  for (let i = 0; i < 9; i++) {
    const newRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const newCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[newRow][newCol] === value) {
      return false;
    }
  }
  return true;
}
function checkVerticalHorizontal(board, row, col, value) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === value || board[row][i] === value) {
      return false;
    }
  }
  return true;
}
function chechValue(board, row, col, value) {
  return checkVerticalHorizontal(board, row, col, value) && checkSector(board, row, col, value);
}

function solve(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] === 0) {
        for (let value = 1; value <= 9; value++) {
          // перебираем все значения от 1 до 9 для данной ячейки
          if (chechValue(data, i, j, value)) {
            // если все норм то записываем данное значение
            data[i][j] = value;
            if (solve(data)) {
              return true;
            } else {
              data[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

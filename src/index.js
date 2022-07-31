module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix == null || matrix === undefined || matrix === 0) {
   return result;
  }
  else {
    for (let i = 0; i < matrix.length; i++) {

      if (i === 0 || i % 2 === 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          result.push(matrix[i][j]);
        }
      } else {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          result.push(matrix[i][j]);
        }
      }
    }
    return result;
  }

}

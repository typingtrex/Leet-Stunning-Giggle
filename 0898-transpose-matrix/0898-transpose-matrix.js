/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
  const transposed = [];
  
  const transposedNumOfRows = matrix[0].length; // 3
  const transposedNumOfCols = matrix.length; // 2
  // transposed.fill([], 0, transposedNumOfRows) // up matrix[0].length (m) with []
  for (let i = 0; i < transposedNumOfRows; i++) {
    transposed.push([]);
  }
  for (let i = 0; i < transposed.length; i++) {
    transposed[i].fill(0, 0, transposedNumOfCols) // fill with matrix.length null // 0 
  }
  console.log("FILLED??", transposed)
  for (let i = 0; i < matrix.length; i++) {
    // i is our row
    const totalColumns = matrix[i].length;
    for (let j = 0; j < totalColumns; j++) {
      // j is our col
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
};
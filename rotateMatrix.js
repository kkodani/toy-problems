function rotateMatrix (matrix) {

    var rotated = [];
    var newRows = matrix[0].length;
    var newCols = matrix.length;


    for(var r=0; r<newRows; r++) {
        rotated[r] = [];
        for(var c=0; c<newCols; c++) {
            rotated[r][c] = matrix[newCols-1-c][r];
        }
    }

    return rotated;
}

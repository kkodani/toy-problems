function spiralTraversal (matrix) {

	var results = [];

	while(matrix.length > 0) {
		console.log(matrix)
		results = results.concat(matrix.shift());
		matrix = rotateMatrixCounterClockwise(matrix);
	}



	return results;
}

function rotateMatrixCounterClockwise (matrix) {

	if(matrix.length === 0) {
		return [];
	}

    var rotated = [];
    var newRows = matrix[0].length;
    var newCols = matrix.length;


    for(var r=0; r<newRows; r++) {
        rotated[r] = [];
        for(var c=0; c<newCols; c++) {
            rotated[r][c] = matrix[c][newRows - 1 - r];
        }
    }

    return rotated;
}

function sudokuCheck (boardStr) {
  var board = boardSplitter(boardStr);
  var count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
  if(checkColumns(board, count) && checkRows(board, count) && checkGrids(board, count)) {
    return 'solved';
  }
  return 'invalid';
}

function boardSplitter(boardStr) {
	var board = boardStr.split('\n');
	for(var i=0; i<board.length; i++) {
		board[i] = board[i].split('');
	}
	return board;
}

function checkCount(count) {
	var measure = count[1];
	for(var k in count) {
		if(count[k] !== measure) {
			return false;
		}
	}
	return true;
}

function checkColumns(board, count) {
	for(var c=0; c<board[0].length; c++) {
		for(var r=0; r<board.length; r++) {
			var num = board[r][c];
			count[num]++;
		}
		if(!checkCount(count)) {
			return false;
		}
	}
	return true;
}

function checkRows(board, count) {
	for(var r=0; r<board.length; r++) {
		for(var c=0; c<board[r].length; c++) {
			var num = board[r][c];
			count[num]++;
		}
		if(!checkCount(count)) {
			return false;
		}
	}
	return true;
}

function checkGrids(board, count) {
	for(var ro=0; ro<9; ro+=3) {
		for(var co=0; co<9; co+=3) {
			for(var r=0; r<3; r++) {
				for(var c=0; c<3; c++) {
					var num = board[r+ro][c+co];
					count[num]++;
				}
			}
			if(!checkCount(count)) {
				return false;
			}
		}
	}
	return true;
}

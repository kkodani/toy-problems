function robotPaths (n) {
    var board = makeBoard(n);
    var pathCount = 0;

    var recurse = function(r, c) {

        board.togglePiece(r, c);

        if(r === n-1 && c === n-1) {
            pathCount++;
        }
        else {
            // up
            if(r-1 >= 0 && r-1 <= n-1 && !board.hasBeenVisited(r-1, c)) {
                recurse(r-1, c);
            }
            // right
            if(c+1 >= 0 && c+1 <= n-1 && !board.hasBeenVisited(r, c+1)) {
                recurse(r, c+1);
            }
            // down
            if(r+1 >= 0 && r+1 <= n-1 && !board.hasBeenVisited(r+1, c)) {
                recurse(r+1, c);
            }
            // left
            if(c-1 >= 0 && c-1 <= n-1 && !board.hasBeenVisited(r, c-1)) {
                recurse(r, c-1);
            }
        }

        board.togglePiece(r, c);
    };

    recurse(0, 0);
    return pathCount;
}

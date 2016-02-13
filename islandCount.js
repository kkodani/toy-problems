function countIslands (mapStr) {
  
  //convert to 2d array
  var map = strTo2d(mapStr);
  var count=0;
  
  //helper function to check all four points around an island
  var recurse = function(r,c) {
    //check if current point is in bounds and is an island
    if(map[r]!==undefined && map[r][c]!==undefined 
       && map[r][c]==="0") {
         
      //change point to ocean so we dont check it again
      map[r][c]="."
      //look at 4 surrounding squares
      //down
      recurse(r+1,c);
      //up
      recurse(r-1,c);
      //right
      recurse(r,c+1);
      //left
      recurse(r,c-1);
    }
  };
  
  //loop through every point in map
  for(var i=0; i<map.length; i++) {
      for(var j=0; j<map[i].length; j++) {
          //if point is an island, increment count and recurse
          if(map[i][j]==="0") {
              recurse(i,j);
              count++;
          }
      }
  }
  
  return count;
}

//helper function to convert string to 2d array
var strTo2d = function(mapStr) {
  var arr = mapStr.split("\n");
  //for(var i=0; i<arr.length; i++) {
  //    arr[i]=arr[i].split("");
  //}
  
  return arr;
};
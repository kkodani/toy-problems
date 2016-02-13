function longestRun (string) {
    var start = 0;    //start of current run
    var end = 0;      //end of current run
    var currentCount = 0;   //current count of run
    var recordCount = 0;    //highest count found so far
    var currentChar = string[0];  //current character in run
    var winner = [start, end];    //longest run found so far
    
    //loop through string
    for(var i=0; i<string.length; i++) {
        
        //if we are on a run
        if(currentChar === string[i]) {
            currentCount++;  //increment count
            end=i;    //increment end
        }
        
        //else we are starting a new run
        else {
            currentChar = string[i];  //reset current character in run
            start = i;  //reset start to current index
            end = i;    //reset end to current index
            currentCount = 1;  //reset count to one
        }
        
        //check if current run is longer than longest run
        if(currentCount > recordCount) {
            recordCount = currentCount; //update highest count
            winner = [start, end];      //update longest run
        }
    }
    
    return winner;
}

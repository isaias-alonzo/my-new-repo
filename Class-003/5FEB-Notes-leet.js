// 58 length of last word

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

var lengthOfLastWord = function(s) {
    let sNew = s.trim().split(" ")
    while(element = (sNew[sNew.length - 1])){
        return element.length
    }

};

// solved without methods; because of the conditional (s[i] != " ") this accounts for any spaced encountered before characters

var lengthOfLastWord = function(s) {
   let count = 0;

   for(let i = s.length - 1; i >= 0; i--){
    if(s[i] != " "){
        count ++; 
    } else if(count > 0){
        return count;
    }
   } return count;

};

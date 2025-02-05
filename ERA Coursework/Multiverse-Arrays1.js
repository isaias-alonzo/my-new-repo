tictactoe = [
    [1 , 2 , 3], 
    [4 , 5 , 6],
    [7 , 7 , 8], 
]; 


twoDimArr = [[1, 2], [4, 5]]; 
for(let i = 0; i < twoDimArr.length; i++) {
    for(let j = 0; j < twoDimArr[i].length; j++) { 
        console.log(twoDimArr[i][j]);
}
}; 

myArr = [3, [1, 2], [4, 5], 7]; 
for(let i = 0; i < myArr.length; i++) {
    if(typeof myArr[i] === "number") {
        console.log(myArr[i]);
        continue; //forces the loop to ignore the remaining code in this iteration and continue back at the top after incrementing 
    }
    for(let j = 0; j < myArr[i].length; j++) { 
        console.log(myArr[i][j]);
}
}; 

const longArr = [1, 2, 3, 4, 5, 6, 7]; 
console.log(longArr.reverse()); 

const reverse3 = (arr) => {
    let temp = arr[0]; 
    arr[0] = arr[6]; 
    arr[6] = temp; 
    
    temp = arr[1]; 
    arr[1] = arr[5]; 
    arr[5] = temp; 
     
    temp = arr[2];
    arr[2] = arr[4];
    arr[4] = temp; 
    
    return arr; 
}
console.log(reverse3(longArr)); 

const reverse4 = (arr) => {
    const revArr = []; 
    for(let i = arr.length-1; i > -1; i--) {
        revArr.push(arr[i]); 
    }
    return revArr;
}; 
retardArray = [1, 3, 4, 6, 7, 12, 14]
console.log(reverse4(retardArray)); 



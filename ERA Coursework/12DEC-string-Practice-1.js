const repeatStr1 = (string, x) => {
    return string.repeat(x);
}
console.log(repeatStr1("roger roger " , 5));
//lazy .repeat operator
const repeatStr = (str, times) => {
    for(let i = 0; i < times; i++) {
        console.log(str); 
    }
};

repeatStr("test", 8);

// in this case the boundary is the times or repetitions listed 
const repeat2 = (str, times) => {
while(times > 0) {
    console.log(str);
    times--;
}
};

repeat2("do it again", 10);
//in this case the while loop is bound by the times variable and doesn't need any other description

let w = 5; 
do {
    console.log("the do-while loop ran!"); 
} while(w > 10);
while(w < 10){ 
    
}
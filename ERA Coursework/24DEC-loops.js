const arr = [10, 20, 30, 40, 50];
//for loop for array iteration
for(let i = 0; i < arr.length; i++) {
    console.log(`i: ${i} | arr[i]: ${arr[i]}`);
};

console.log(`i: 5 | 5 < ${arr.length}`);

for(let arrItem of arr) {
    console.log(arrItem);
};

console.log("counting down");
for(let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
    
};

/*Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).
The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.
Given a and b, determine their respective comparison points.
Example
a = [1, 2, 3]
b = [3, 2, 1]

For elements *0*, Bob is awarded a point because a[0] .
The return array is [1, 1] with Alice's score first and Bob's second.
Function Description
Complete the function compareTriplets in the editor below.
compareTriplets has the following parameter(s):
int a[3]: Alice's challenge rating
int b[3]: Bob's challenge rating
Return
int[2]: Alice's score is in the first position, and Bob's score is in the second.
Input Format
The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b. */

const a = [12, 43, 3];
const b = [32, 11, 5];
const compareTriplets = (a, b) => { 
    const points = [0, 0];

    if(a[0] > b[0]) {
        points[0]++; 
    } else if(a[0] < b[0]) {
        points[1]++;
    }

    if(a[1] > b[1]) {
        points[0]++; 
    } else if(a[1] < b[1]) {
        points[1]++;
    }

    if(a[2] > b[2]) {
        points[0]++; 
    } else if(a[2] < b[2]) {
        points[1]++;
    }
    return points;
};

const compareTripletsScalable = (a, b) => {
    const score = [0, 0];
    for(let i = 0; i < arr.length; i++) {
        if(a[i] > b[i]) 
        score[0]++;
    else if(a[i] < b[i])
        score[1]++;
    }
    return score;
};

const copareTriplesBooleanHack = (a, b) => {
    const score = [0, 0];
    for(let i = 0; i < a.length; i++) {
    score[0] += a[0] > b[0];
    score[1] += a[0] > b[0];
    score[0] += a[1] > b[1];
    score[1] += a[1] > b[1];
    score[0] += a[2] > b[2];
    score[1] += a[2] > b[2];
    } 
    return score;
};
/*
const myNumbers = [1, 2, 4, 45]

const aVeryBigSum = (ar) => {
    const sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum *= ar[i]; 
    }
    console.log(sum);
};
console.log(aVeryBigSum(myNumbers)); */

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; 
}

console.log(sum);
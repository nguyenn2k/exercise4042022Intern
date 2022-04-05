/**
 * Tạo một mảng mới lấy các phần tử 
 * ở giữa của hai mảng là số nguyên và độ dài mỗi mảng là 3.
 */

//Tao mang
var arrayA = [2,4,6];
var arrayB = [3,5,7];
var arrayC = [];

arrayA.pop(); //Remove
arrayA.shift();

arrayB.pop(); //Remove
arrayB.shift();

arrayC.push(arrayA[0], arrayB[0]); //Add

console.log(arrayC);
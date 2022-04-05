//Tính tổng ba phần tử của một mảng số nguyên cho trước có độ dài 3:

//Cho mang co do dai la 3:
var Array = [2,4,6];

//Cho gia tri tong ban dau = 0:
var sum = 0;

//Dung vong lap for:
for(var i in Array){
    //Moi lan di qua deu tang len 1 don vi:
    sum+= Array[i];
}

// In ket qua ra man hinh:
console.log(sum)
/**
 * Tạo một mảng mới lấy các phần tử đầu tiên và cuối cùng từ một mảng 
 * số nguyên đã cho và độ dài phải lớn hơn hoặc bằng 1.
 */

var arrayX = [12,16,18,20];

if(arrayX.length <1){
    console.log('Mang khong co phan tu');
}
else{
    var arrayY = [];
    arrayY.push(arrayX[0], arrayX[arrayX.length-1]);
    console.log(arrayY)
}
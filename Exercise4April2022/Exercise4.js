/**
 *  Viết một chương trình JavaScript để tính tổng của hai số nguyên đã cho, 
 * Nếu tổng nằm trong khoảng 50..80 trả về 65, còn không trả về  80.
 */

//Cho 2 biến a và b :
var a = 50
var b = 20
//Biến tính tổng:
var sum = a + b

//Dùng hàm function để check:
function checkNumber(sum){
    if(sum > 50 && sum < 80) {
        return 65;
    }
    else{
        return 80;
    }
}

//In kết quả ra màn hình:
console.log('Result: '+checkNumber(sum));
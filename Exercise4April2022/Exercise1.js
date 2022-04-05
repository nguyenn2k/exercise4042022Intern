//Tìm một giá trị gần nhất với 100 từ hai số nguyên đã cho khác nhau:
const arrays = [50, 200, 30, 40, 65]
const numb = 100
const closestNumber = arrays.reduce((previousValue, currentValue) => {
    //Abs la gia tri tuyet doi
    if (Math.abs(currentValue - numb) < Math.abs(previousValue - numb)) {
        return currentValue;
    }
    else {
        return previousValue;
    }
});

console.log(closestNumber)
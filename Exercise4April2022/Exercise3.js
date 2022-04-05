//Kiểm tra xem một ký tự được chỉ định có tồn tại ở vị trí thứ 2 đến thứ 4 trong một chuỗi nhất định hay không

var string = "I Love U";

var checkKT = 'e'

if(string[1]==checkKT || string[2]==checkKT || string[3]==checkKT){
    console.log("Ky tu "+checkKT+" ton tai o vi tri 2 den vi tri 4")
}
else{
    console.log("Ky tu "+checkKT+" khon ton tai o vi tri 2 den vi tri 4")
} 
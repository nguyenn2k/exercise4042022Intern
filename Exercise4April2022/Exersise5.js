/**
 * Tạo một chuỗi mới gồm 4 bản sao (console.log 4 lần) của 3 ký tự cuối cùng của một 
 * chuỗi gốc nhất định. Độ dài của chuỗi đã cho phải từ 3 trở lên.
 */

var string = 'I Love U'
if(string.length <3){
    console.log('dDo dai cua chuoi tu 3 ky tu tro len');
}
else{
    //Dung ham 'substring'de Phương thức sẽ trả về nội dung được trích xuất từ chuỗi gốc ban đầu:
    var cutString = string.substring(string.length-3, string.length);

    var newString = cutString.repeat(4);
    console.log(newString);
}
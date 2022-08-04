// // [Bài tập] Luyện tập Array

// // Để hoàn thành bài thực hành, học viên cần:
// // Đưa mã nguồn lên GitHub
// // Bài 1: Viết một chương trình JavaScript đơn giản để nối tất cả các 
// phần tử của mảng sau thành một chuỗi.
// // myColor = ["Red", "Green", "White", "Black"];
// // Đầu ra mong đợi :
// // "Red, Green, White, Black"
// // "Red + Green + White + Black"


// let myColor = ["Red", "Green", "White", "Black"];
// let myColor1 = myColor.join(",");// chuyen mang thanh chuoi ngan cach boi dau phay
// console.log(myColor1);
// let myColor2 = myColor.join("*");// chuyenr mang thanh chuoi ngan cach boi dau "*"
// console.log(myColor2);







// // Bài 2: Viết chương trình JavaScript chấp nhận một số 
// làm đầu vào và chèn dấu gạch ngang (-) vào giữa hai số chẵn.
//  Ví dụ: nếu bạn chấp nhận 025468, đầu ra phải là 0-2-5-4-6-8.
// cach1
//  let number = prompt(" moi nhap day so bat ky").split( '');console.log(number);
//  console.log(number.join("-"));
// cach2
// /////for (let i= 0;i<=number.length-2;i=i+1){
// ///////    number[i]=number[i]+"-";
// ////}console.log(number.join(""));


// // Bài 3: Viết một chương trình JavaScript 
// chấp nhận một chuỗi làm đầu vào và hoán đổi trường hợp của mỗi ký tự. 
// Ví dụ: nếu bạn nhập 'The Quick Brown Fox', đầu ra phải là 'tHE qUICK bROWN fOX'.



// // Bài 4: Viết kịch bản yêu cầu người dùng nhập một dãy số,
//  Các số được phân tách bằng dấu phẩy, tính tổng các số và hiể thị cho người dùng
// let number = prompt('moi may nhap day so cach nhau boi dau phay').split(",");
// console.log(number);
// let t = 0;
// for (let i = 0; i <= number.length - 1; i = i + 1) {
//     t = t + Number(number[i]);// bien phan tu chuoi torng mang thanh so
//     console.log(number[i]);
// }
// console.log(t);







// // Bài 5: Viết script yêu cầu người dùng nhập một dãy số, 
// các số được phân tách bằng dấu phẩy, 
// tìm số nhỏ nhất và đăng xuất cho người dùng
// let arr = prompt(" nhap day so cau may").split(","); console.log(arr);// chuoi thanh mang dang chuoi
// let min = Number(arr[0]);// bien phan tu mang dang chuoi thanh dang so
// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//     if (min > Number(arr[i])) {
//         min = Number(arr[i]);
//     }
// }
// console.log("min la " + min);













// // Bài 6: Tạo một mảng chứa ít nhất 5 số, sau đó yêu cầu người dùng nhập một số,
//  thực hiện tìm kiếm để tìm số trong mảng, nếu số được tìm thấy,
//  hãy cho người dùng biết rằng với chỉ số của nó trong mảng, 
// nếu không, cũng nói với họ như vậy
// // const arr = [3, 4, 6, -9, 10, -88, 2];


// let arr = [3, 4, 6, -9, 10, -88, 2]; console.log(arr);
// let userNumber = Number(prompt(" moi nhap so can tim"));
// let indexNumber = -1
// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//     if (userNumber === Number(arr[i])) {
//         indexNumber = i;
//     }
// }
// if (indexNumber === -1) {
//     console.log(userNumber + ' ko co');
// } else {
//     console.log(userNumber + " co trong day va co chi so index la :" + indexNumber);
// }















// // Bài 7: Bạn là một người chăn cừu sở hữu một đàn cừu. 
// Mỗi con cừu trong đàn của bạn có kích thước khác nhau:


// // 7.1. Tạo một mảng để thể hiện kích thước đàn của bạn và 
// ghi lại tất cả kích thước đàn của bạn, đầu ra màn hình dự kiến:

let kichCoDanCuu = [30,25,17,89,100,78,99];
console.log("kich thuoc dan cuu hien tai la:"+ kichCoDanCuu);
alert("kich thuoc dan cuu hien tai la:"+ kichCoDanCuu);


// // 7.2. Cuối mỗi tháng, bạn phải chọn một và chỉ một con cừu để xén lông 
// và do đó bạn muốn chọn con lớn nhất để tối đa hóa lợi nhuận của mình. 
// Thêm tập lệnh để tìm kiếm những con cừu lớn nhất trong danh sách của bạn:

// // Hint: Google ‘JS Array find max’
let tinhToan=prompt( "muon tinh toan may thang");
for (j=1;j<=tinhToan;j=j+1){


let max = kichCoDanCuu[0];
indexNumber=-1;
for (let i=0;i<= kichCoDanCuu.length -1; i=i+1){
    if(max< kichCoDanCuu[i]){
        max = kichCoDanCuu[i];
        indexNumber=i;
    }
}console.log('--->>> con cuu to nhat la ' + max);



// // 7.3. Sau khi cạo lông, kích thước của nó sẽ trở về kích thước mặc định, là 8.
// // Hint: Google ‘JS Array indexOf


console.log('chung toi se cao long con '+ max +" sau khi cao long no chi con la  8");
kichCoDanCuu[indexNumber]=8;
console.log("--->>> kich thuoc moi cua dan cuu : "+ kichCoDanCuu);






// // 7.4. Trong tháng tiếp theo,
//  MỌI con cừu trong đàn của bạn lớn lên, 
//  kích thước của chúng tăng thêm 50. Đăng xuất chúng

console.log( "sau moi thang tat ca con cuu cua chung toi se tang them 50");
 for(i=0;i<=kichCoDanCuu.length-1;i=i+1){
    kichCoDanCuu[i]=Number(kichCoDanCuu[i])+50;
 } console.log("--->>> kich thuoc dan cuu sau mot thang la :"+ kichCoDanCuu);
 






// // 7.5. Tìm con cừu lớn nhất hiện tại và cạo lông nó
 let max1 = kichCoDanCuu[0]
for (let i=0;i<= kichCoDanCuu.length -1 ;i=i+1){
   if( max1< kichCoDanCuu[i]){
    max1=kichCoDanCuu[i];
    indexNumber=i
   }
}
console.log("--->>> con lon nhat hie tai la :" + max1);}

// // 7.6. Hãy làm điều này trong 3 tháng (hoặc bao lâu tùy thích)
// // (Sử dụng vòng lặp để thực hiện)
//   tl: da dung vong lap for roi








// // 7.7. Sau ngày ngày xén lông cừu, bạn trở nên buồn chán.
//  Bạn muốn bán đàn của mình để đi du lịch khắp thế giới. 
//  Để có thương mại công bằng, bây giờ bạn phải tính toán tổng kích thước đàn cừu của bạn 
//  và sau đó là số tiền dự kiến bạn có thể nhận được từ việc bán đàn của mình, 
//  trước khi đưa ra thị trường. V
//  iết một chương trình để tính tổng kích thước đàn cừu của bạn 
//  cũng như số tiền bạn sẽ có. Đầu ra bảng điều khiển mong đợi:

console.log(' thoi diem ban muon ban la thoi diem ban muon nuoi cuu sau may thang o tren');
let total = 0;
for( i=1; i<=kichCoDanCuu.length-1; i=i+1){
    total = total+kichCoDanCuu[i];
}console.log ( "--->>> tong khoi luong: "+total);
let giaThanh = prompt(" gia ban mong muon ban cuu");
let tongDoanhThu= total*giaThanh;
console.log("--->>> so tien sau khi ban dan cuu :"+ tongDoanhThu);





// // Bài 8: (Tùy chọn) Viết tập lệnh yêu cầu người dùng nhập một chuỗi tên,
//  được phân tách bằng dấu phẩy (,), 
//  Tạo một mảng mới chứa các tên, mỗi tên được bao quanh bằng dấu <>. 
//  Nếu bạn cần gợi ý, hãy tìm chúng ở cuối bài tập về nhà này
   

// let userInput =prompt (' nhap chuoi ten cach nhau boi dauu phay').split(',');
// console.log(userInput);
// for (let i=0; i<= userInput.length-1;i=i+1){
//     userInput[i]="<" + userInput[i]+'>';
// }console.log(userInput.join(','));








// // Bài 9: (Tùy chọn) Viết tập lệnh yêu cầu người dùng nhập một chuỗi Số, 
// được phân tách bằng dấu phẩy (,). 
// Tạo một mảng mới chỉ chứa các Số lẻ của dãy đã nhập.

// let userInput = prompt("nhap chuoi so cach nhau boi dau ","").split(',');
// let lateArr=[];
// for(let i = 0 ; i<= userInput.length-1;i=i+1){
//     if( Number(userInput[i]%2===1)){
// lateArr.push(Number(userInput[i]))
//     }
// }console.log(lateArr);




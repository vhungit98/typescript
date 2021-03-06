// Decorator for class: Class decorator
// Thường được áp dụng cho constructor của class và có thể được sử dụng để để theo dõi, sửa đổi hoặc thay thế định nghĩa cho class
function Logger1(constructor: Function) {
    console.log(`Log 1 của decorator`);
    console.log(`Log 2 của decorator: (constructor) 
    ${constructor}`);
}
@Logger1 // Được khai báo bằng một function, decorator được gọi trước khi chạy đến constructor
class Person1 {
    name = "Max";
    constructor() {
        console.log('Log 1 của class');
    }
}
const pers1 = new Person1();
// pers1.test();
// console.log(pers1);

// Decorator factory: là một hàm trả về chính hàm decorator và có thể thêm đối số cho hàm
// function Logger2(logString: string) {
//     return function (constructor: Function) {
//         console.log('Log 1 của decorator: ' + logString);
//         console.log('Log 2 của decorator: ' + constructor);
//     }
// }
// // @Logger2('LOGGING - PERSON')
// class Person2 {
//     name = 'Max';
//     constructor() {
//         console.log('Log 1 của class');
//     }
// }

// const pers2 = new Person2();
// console.log(pers2);

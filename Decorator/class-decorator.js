var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator for class: Class decorator
// Thường được áp dụng cho constructor của class và có thể được sử dụng để để theo dõi, sửa đổi hoặc thay thế định nghĩa cho class
function Logger1(constructor) {
    console.log("Log 1 c\u1EE7a decorator");
    console.log("Log 2 c\u1EE7a decorator: (constructor) \n    " + constructor);
}
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = "Max";
        console.log('Log 1 của class');
    }
    Person1 = __decorate([
        Logger1 // Được khai báo bằng một function, decorator được gọi trước khi chạy đến constructor
    ], Person1);
    return Person1;
}());
var pers1 = new Person1();
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

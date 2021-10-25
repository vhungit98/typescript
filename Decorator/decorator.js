// **************************************************************************************************************
// **************************************************************************************************************
// Class decorator:  được áp dụng cho constructor của class và có thể được sử dụng để để theo dõi, sửa đổi hoặc thay thế định nghĩa cho class
// **************************************************************************************************************
// **************************************************************************************************************
// Property decorator: được áp dụng trênn phần khai báo thuộc tính
// Hàm property decorator được gọi với hai đối số sau:
// + Hàm constructor của class cho static member hoặc protype của class cho intance member
// + Tên thuộc tính
// **************************************************************************************************************
// **************************************************************************************************************
// Method decorator: được áp dụng cho phần khai báo phương thức của class
// Hàm method decorator được gọi với 3 đối số:
// + target: hàm constructor của class cho static member hoặc protype của class cho intance member
// + methodName: tên của method (phương thức)
// + decriptor: property descriptor của method
// **************************************************************************************************************
// **************************************************************************************************************
// Accessor decorator: giống method decorator nhưng được áp dụng cho setter hoặc getter
// Typescript không cho phép tạo decorator cho cả getter và setter (chỉ được tạo cho 1 trong 2)
// **************************************************************************************************************
// **************************************************************************************************************
// Parameter decorator: được áp dụng cho khai báo tham số của phương thức hoặc tham số của constructor
// Parameter decorator được gọi với 3 đối số:
// + targer: hàm constructor của class cho static member hoặc protype của class chho instance member
// + Tên của parameter được decorator
// + Thứ tự của param trong list các params của function cha
// Parameter decorator chỉ được sử dụng để kiểm tra sự tồn tại của params trong function, và thường được dùng kết hợp với method decorator hoặc accessor decorator
// **************************************************************************************************************
// **************************************************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function ClassDecorator(message) {
    return function (constructor) {
        console.log("Log 1 c\u1EE7a class decorator: (message)\n        " + message);
        console.log("Log 2 c\u1EE7a class decorator: (constructor)\n        " + constructor);
    };
}
function MethodDecorator(target, methodName, decriptor) {
    console.log("Log 1 c\u1EE7a method decorator: (target, methodName, decriptor)\n    " + target + " - " + methodName + " - " + decriptor);
}
function parameterDecorator(target, name, indexParam) {
    console.log("Log 1 c\u1EE7a parameter decorator: (target, name, indexParam)\n    " + target + " - " + name + " - " + indexParam);
}
function propertyDecorator(target, propertyName) {
    console.log("Log 1 c\u1EE7a property decorator: (target, propertyName)\n    " + target + " - " + propertyName);
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = "Max";
        console.log("Log 1 c\u1EE7a constructor class");
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log("Log 1 c\u1EE7a method class: (person name) " + this.name + " ");
    };
    __decorate([
        propertyDecorator
    ], Person.prototype, "name");
    __decorate([
        MethodDecorator
    ], Person.prototype, "display");
    Person = __decorate([
        ClassDecorator("Mesage...."),
        __param(0, parameterDecorator)
    ], Person);
    return Person;
}());
var pers = new Person('Hưng');
// pers.display();

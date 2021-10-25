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

function ClassDecorator(message: string) {
    return function (constructor: Function) {
        console.log(`Log 1 của class decorator: (message)
        ${message}`);
        console.log(`Log 2 của class decorator: (constructor)
        ${constructor}`);
    }
}
function MethodDecorator(target: any, methodName: string, decriptor: PropertyDescriptor) {
    console.log(`Log 1 của method decorator: (target, methodName, decriptor)
    ${target} - ${methodName} - ${decriptor}`);
}

function parameterDecorator(target: any, name: string, indexParam: number) {
    console.log(`Log 1 của parameter decorator: (target, name, indexParam)
    ${target} - ${name} - ${indexParam}`);
}

function propertyDecorator(target: any, propertyName: string | Symbol) {
    console.log(`Log 1 của property decorator: (target, propertyName)
    ${target} - ${propertyName}`);
}

@ClassDecorator(`Mesage....`)
class Person {
    @propertyDecorator
    name = `Max`;
    constructor(@parameterDecorator name: string) {
        console.log(`Log 1 của constructor class`);
        this.name = name;
    }
    @MethodDecorator
    display(): void {
        console.log(`Log 1 của method class: (person name) ${this.name} `);
    }
}

const pers = new Person('Hưng');
// pers.display();
{
    console.log("Hello!");
    // String
    var string = "Hưng";
    // Number
    var number = 1;
    // Mảng chữ
    var array_string = ["Hưng 1", "Hưng 2", "Hưng 3"];
    // Mảng số
    var array_number = [1, 2, 3];
    // True / False
    var boolean = true;
    // Enum
    var trangthai = void 0;
    (function (trangthai) {
        trangthai["pending"] = "\u0110ang ch\u1EDD";
        trangthai["done"] = "Xong";
    })(trangthai || (trangthai = {}));
    // Tuple: Mảng có thể chứa nhiều kiểu dữ liệu
    var tuple = ["Hưng", 23];
    // Any
    var x = {
        pending: "Đang chờ",
        done: "Xong"
    };
    // Void: Không chứa giá trị (thường dùng trong function, không return)
    {
        function tinhtoan() {
            console.log("Xin chào!");
        }
        tinhtoan();
    }
    console.log("Ch\u00E0o " + string);
    console.log("S\u1ED1 " + number);
    console.log("M\u1EA3ng ch\u1EEF: " + array_string);
    console.log("M\u1EA3ng s\u1ED1: " + array_number);
    console.log("\u0110\u00FAng sai: " + boolean);
    console.log("Enum: " + trangthai.pending);
    console.log(tuple);
    console.log(x);
}

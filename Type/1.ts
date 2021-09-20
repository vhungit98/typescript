{
  console.log("Hello!");
  // String
  var string: string = "Hưng";
  // Number
  var number: number = 1;
  // Mảng chữ
  var array_string: string[] = ["Hưng 1", "Hưng 2", "Hưng 3"];
  // Mảng số
  var array_number: number[] = [1, 2, 3];
  // True / False
  var boolean: boolean = true;
  // Enum
  enum trangthai {
    pending = "Đang chờ",
    done = "Xong",
  }
  // Tuple: Mảng có thể chứa nhiều kiểu dữ liệu
  var tuple: [string, number] = ["Hưng", 23];
  // Any
  var x: any = {
    pending: "Đang chờ",
    done: "Xong",
  };
  // Void: Không chứa giá trị (thường dùng trong function, không return)
  {
    function tinhtoan(): void {
      console.log("Xin chào!");
    }
    tinhtoan();
  }

  console.log(`Chào ${string}`);
  console.log(`Số ${number}`);
  console.log(`Mảng chữ: ${array_string}`);
  console.log(`Mảng số: ${array_number}`);
  console.log(`Đúng sai: ${boolean}`);
  console.log(`Enum: ${trangthai.pending}`);
  console.log(tuple);
  console.log(x);
}

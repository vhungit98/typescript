class Tuong {
  ten: string;
  motatuong: string;
  kinang: string[];
  constructor(ten: string, motatuong: string, kinang: string[]) {
    this.ten = ten;
    this.motatuong = motatuong;
    this.kinang = kinang;
  }
  showThongTin(): void {
    var kn: string = "";
    for (let index = 0; index < this.kinang.length; index++) {
      kn += this.kinang[index];
      kn += " | ";
    }
    var thongtintuong: string = `
    Tên tương: ${this.ten}
    Mô tả tướng: ${this.motatuong}
    Kĩ năng: ${kn}
  `;
  console.log(thongtintuong);
  
    // return `
    //     Tên tương: ${this.ten}
    //     Mô tả tướng: ${this.motatuong}
    //     Kĩ năng: ${kn}
    //   `;
  }
}

class SatThu extends Tuong {
  // extends: Khai báo class con kế thừa class cha
  donsatthu: string;
  constructor(
    ten: string,
    motatuong: string,
    kinang: string[],
    donsatthu: string
  ) {
    super(ten, motatuong, kinang); // super(): Sử dụng các thuộc tính đã được định nghĩa trong hàm constructor() của class cha, khỏi phải định nghĩa lại
    this.donsatthu = donsatthu;
  }
  showThongTin(): void {
    // Mặc định đã có sẵn phương thức đã có trong class cha, nhưng nếu muốn có thể định nghĩa lại
    // Khai báo: super.nameMethod() (nội dung method muốn sử dụng lại ở class cha)
    // Có thể định nghĩa thêm...
    var kn: string = "";
    for (let index = 0; index < this.kinang.length; index++) {
      kn += this.kinang[index];
      kn += " | ";
    }
    var thongtintuong: string = `
    Tên tương: ${this.ten}
    Mô tả tướng: ${this.motatuong}
    Kĩ năng: ${kn}
    Đòn sát thủ: ${this.donsatthu}
  `;
    console.log(thongtintuong);

    // return ;
  }
}

var ashe = new Tuong("Ashe", "Cung băng", [
  "Chú tâm tiễn",
  "Tán xạ tiễn",
  "Ưng tiễn",
  "Đại băng tiễn",
]);
// console.log(ashe.showThongTin());

var talon = new SatThu(
  "Talon",
  "Sát thủ bóng đêm",
  ["Ngoại giao kiểu Noxus", "Ám khí"],
  "Sát thủ vô hình"
);
// talon.showThongTin();

// Gần giống abstract, qui mô áp dụng nhỏ, còn có thể dùng cho khai báo biến

interface nguoi {
  // Quy ước kiểu dữ liệu (1 bản thiết kế của dữ liệu)
  tuoi: number;
  ten?: string;
}
function xemtt(motnguoi: nguoi): void {
  console.log(`${motnguoi.ten} - ${motnguoi.tuoi}`);
}

// xemtt({ tuoi: 23, ten: "Hưng" });

// interface class -> Quy định khi một class implement từ interface thì phải có đủ các thuộc tính và các hàm của interface
interface tuongInterface {
  ten: string;
  mau: number;
  satthuong: number;
  mota: string;
  xemtuong(): void;
  donkinang(mau: number): any;
  bienve(): void;
}
class tuong implements tuongInterface {
  ten: string;
  mau: number;
  satthuong: number;
  mota: string;
  mana: number; // Có thể định nghĩa thêm
  constructor(
    ten: string,
    mau: number,
    satthuong: number,
    mota: string,
    mana: number
  ) {
    this.ten = ten;
    this.mau = mau;
    this.satthuong = satthuong;
    this.mota = mota;
    this.mana = mana;
  }
  xemtuong(): void {
    console.log("Xem tướng");
  }
  donkinang(mau: number): any {
    return 1;
  }
  bienve(): void {
    console.log("Biến về");
  }
}

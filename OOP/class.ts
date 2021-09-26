class nhan_vat_game {
  ten_nhan_vat: string;
  slogan: string;
  mau: number;
  // de tao ra instance: nhan vat that
  constructor(ten_nhan_vat: string, slogan: string, mau: number) {
    this.ten_nhan_vat = ten_nhan_vat;
    this.slogan = slogan;
    this.mau = mau;
  }
  chay() {}
  chem() {}
  hienthiten() {
    return `Nhân vật: ${this.ten_nhan_vat}, slogan: ${this.slogan}, chỉ số máu là: ${this.mau}`;
  }
}
var nhanvat1 = new nhan_vat_game("Irelia", "Ý chí của lưỡi kiếm", 697.2);
// console.log(nhanvat1.hienthiten());

class dien_thoai {
  ten: string;
  gia: number;
  sao: number;
  mausac: string[];
  constructor(ten: string, gia: number, sao: number, mausac: string[]) {
    this.ten = ten;
    this.gia = gia;
    this.sao = sao;
    this.mausac = mausac;
  }
  showNoiDung() {
    return `Sản phẩm là: ${this.ten}, có giá: ${this.gia}, đánh giá: ${this.sao} sao, có ${this.mausac.length} màu`;
  }
}
var sanpham1 = new dien_thoai("Samsung S8", 10000, 5, [
  "Xanh",
  "Đỏ",
  "Tím",
  "Vàng",
]);
// console.log(sanpham1.showNoiDung());

// Sử dụng state trong class
enum state {
  Create = 10,
  Processing,
  Finish
}
class cong_viec {
  id: number = 1;
  // Có thể truy cập vào thuộc tính, phương thức mà không cần phải khởi tạo instance
  // Cú pháp: className.property - className.method();
  ten: string = 'Công việc số 1';
  static ten2: string = 'Công việc số 1';
  trangthai: state;
  constructor(id: number, ten: string, trangthai: state) {
    this.id = id;
    this.ten = ten;
    this.trangthai = trangthai;
  }
  thong_tin() {
    return `ID: ${this.id}, Tên: ${this.ten}, Trạng thái: ${this.trangthai}`;
  }
  static test(){
    return 'Truy cập vào method static!';
  }
}

var congviec1 = new cong_viec(1, "Học TypeScript", state.Finish);
// console.log(cong_viec.ten2);
// console.log(cong_viec.test());

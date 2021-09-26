abstract class DienThoai {
  ten: string;
  constructor(ten: string) {
    this.ten = ten;
  }
  abstract guitinnhan(): void;
  abstract goidienthoai(): string;
}

class android extends DienThoai {
  constructor(ten: string) {
    super(ten);
  }
  guitinnhan() {
    console.log("Gửi tin nhắn");
  }
  goidienthoai(){
    return 'Gọi điện thoại';
  }
}

var samsung = new android("Samsung");
// samsung.guitinnhan();
// console.log(samsung.goidienthoai());


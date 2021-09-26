// Public: là kiểu dữ liệu khai báo thuộc loại công cộng, những phương thức hoặc biến với kiểu dữ liệu này sẽ được truy xuất và sử dụng ở đâu cũng được.

// Private: là kiểu kiểu dữ liệu khai báo thuộc loại nội bộ, những phương thức hoặc biến với kiểu dữ liệu này sẽ được truy xuất và sử dụng trong nội bộ của Class nơi mà phương thức hoặc biến đó được khai báo.

// Protected: là kiểu dữ liệu khai báo cũng thuộc loại nội bộ như Private, nhưng thêm vào đó những phương thức hoặc biến với kiểu dữ liệu này ngoài việc sử dụng trong nội bộ Class, chúng còn có thể được truy xuất ở Class con kế thừa Class khai báo hàm hoặc phương thức đó.

class KhoaHoc {
  id: number;
  ten: string;
  dodai: number;
  constructor(id: number, ten: string, dodai: number) {
    this.id = id;
    this.ten = ten;
    this.dodai = dodai;
  }
  xemKhoaHoc() {
    console.log(
      `
            ID khóa học: ${this.id}
            Tên khóa học: ${this.ten}
            Độ dài khóa học: ${this.dodai} giờ
          `
    );
  }
}

class KhoaLapTrinh extends KhoaHoc {
  filedinhkem: string;
  constructor(
    id: number,
    ten: string,
    dodai: number,
    filedinhkem: string
  ) {
    super(id, ten, dodai);
    this.filedinhkem = filedinhkem;
  }
  xemKhoaHoc() {
    super.xemKhoaHoc();
    console.log(`File đính kèm: ${this.filedinhkem}`);
  }
}

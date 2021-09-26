class hero {
  private _ten: string;
  constructor(_ten: string) {
    this._ten = _ten;
  }

  public get ten(): string {
    // Xử lý bảo mật
    // ...
    // Nếu ok thì mới return
    return this._ten;
  }

  public set ten(_ten: string) {
    this._ten = _ten;
  }
}
var zeus = new hero("ZEUS");
zeus.ten = "Thần ZEUS"; // Gọi hàm set
// console.log(zeus.ten); // Gọi hàm get

// Check điều kiện trước khi có thể set và get
var matkhau = "emynguyen";
class Nguoi {
  private _ten: string;
  constructor(_ten: string) {
    this._ten = _ten;
  }

  public get ten(): string {
    if (matkhau === "emynguyen") return this._ten;
    else return "Sai mật khẩu";
  }

  public set ten(v: string) {
    if (matkhau === "emynguyen") this._ten = v;
    else this._ten = "Sai mật khẩu";
  }
}

var nguoiso1 = new Nguoi("");
nguoiso1.ten = "Hưng LV";
// console.log(nguoiso1.ten);

var hero = /** @class */ (function () {
    function hero(_ten) {
        this._ten = _ten;
    }
    Object.defineProperty(hero.prototype, "ten", {
        get: function () {
            // Xử lý bảo mật
            // ...
            // Nếu ok thì mới return
            return this._ten;
        },
        set: function (_ten) {
            this._ten = _ten;
        },
        enumerable: false,
        configurable: true
    });
    return hero;
}());
var zeus = new hero("ZEUS");
zeus.ten = "Thần ZEUS"; // Gọi hàm set
// console.log(zeus.ten); // Gọi hàm get
// Check điều kiện trước khi có thể set và get
var matkhau = "emynguyen";
var Nguoi = /** @class */ (function () {
    function Nguoi(_ten) {
        this._ten = _ten;
    }
    Object.defineProperty(Nguoi.prototype, "ten", {
        get: function () {
            if (matkhau === "emynguyen")
                return this._ten;
            else
                return "Sai mật khẩu";
        },
        set: function (v) {
            if (matkhau === "emynguyen")
                this._ten = v;
            else
                this._ten = "Sai mật khẩu";
        },
        enumerable: false,
        configurable: true
    });
    return Nguoi;
}());
var nguoiso1 = new Nguoi("");
nguoiso1.ten = "Hưng LV";
// console.log(nguoiso1.ten);

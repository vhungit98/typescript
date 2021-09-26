var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tuong = /** @class */ (function () {
    function Tuong(ten, motatuong, kinang) {
        this.ten = ten;
        this.motatuong = motatuong;
        this.kinang = kinang;
    }
    Tuong.prototype.showThongTin = function () {
        var kn = "";
        for (var index = 0; index < this.kinang.length; index++) {
            kn += this.kinang[index];
            kn += " | ";
        }
        var thongtintuong = "\n    T\u00EAn t\u01B0\u01A1ng: " + this.ten + "\n    M\u00F4 t\u1EA3 t\u01B0\u1EDBng: " + this.motatuong + "\n    K\u0129 n\u0103ng: " + kn + "\n  ";
        console.log(thongtintuong);
        // return `
        //     Tên tương: ${this.ten}
        //     Mô tả tướng: ${this.motatuong}
        //     Kĩ năng: ${kn}
        //   `;
    };
    return Tuong;
}());
var SatThu = /** @class */ (function (_super) {
    __extends(SatThu, _super);
    function SatThu(ten, motatuong, kinang, donsatthu) {
        var _this = _super.call(this, ten, motatuong, kinang) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    SatThu.prototype.showThongTin = function () {
        // Mặc định đã có sẵn phương thức đã có trong class cha, nhưng nếu muốn có thể định nghĩa lại
        // Khai báo: super.nameMethod() (nội dung method muốn sử dụng lại ở class cha)
        // Có thể định nghĩa thêm...
        var kn = "";
        for (var index = 0; index < this.kinang.length; index++) {
            kn += this.kinang[index];
            kn += " | ";
        }
        var thongtintuong = "\n    T\u00EAn t\u01B0\u01A1ng: " + this.ten + "\n    M\u00F4 t\u1EA3 t\u01B0\u1EDBng: " + this.motatuong + "\n    K\u0129 n\u0103ng: " + kn + "\n    \u0110\u00F2n s\u00E1t th\u1EE7: " + this.donsatthu + "\n  ";
        console.log(thongtintuong);
        // return ;
    };
    return SatThu;
}(Tuong));
var ashe = new Tuong("Ashe", "Cung băng", [
    "Chú tâm tiễn",
    "Tán xạ tiễn",
    "Ưng tiễn",
    "Đại băng tiễn",
]);
// console.log(ashe.showThongTin());
var talon = new SatThu("Talon", "Sát thủ bóng đêm", ["Ngoại giao kiểu Noxus", "Ám khí"], "Sát thủ vô hình");
// talon.showThongTin();

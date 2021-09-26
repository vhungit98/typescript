// Gần giống abstract, qui mô áp dụng nhỏ, còn có thể dùng cho khai báo biến
function xemtt(motnguoi) {
    console.log(motnguoi.ten + " - " + motnguoi.tuoi);
}
var tuong = /** @class */ (function () {
    function tuong(ten, mau, satthuong, mota, mana) {
        this.ten = ten;
        this.mau = mau;
        this.satthuong = satthuong;
        this.mota = mota;
        this.mana = mana;
    }
    tuong.prototype.xemtuong = function () {
        console.log("Xem tướng");
    };
    tuong.prototype.donkinang = function (mau) {
        return 1;
    };
    tuong.prototype.bienve = function () {
        console.log("Biến về");
    };
    return tuong;
}());

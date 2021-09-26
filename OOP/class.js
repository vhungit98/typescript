var nhan_vat_game = /** @class */ (function () {
    // de tao ra instance: nhan vat that
    function nhan_vat_game(ten_nhan_vat, slogan, mau) {
        this.ten_nhan_vat = ten_nhan_vat;
        this.slogan = slogan;
        this.mau = mau;
    }
    nhan_vat_game.prototype.chay = function () { };
    nhan_vat_game.prototype.chem = function () { };
    nhan_vat_game.prototype.hienthiten = function () {
        return "Nh\u00E2n v\u1EADt: " + this.ten_nhan_vat + ", slogan: " + this.slogan + ", ch\u1EC9 s\u1ED1 m\u00E1u l\u00E0: " + this.mau;
    };
    return nhan_vat_game;
}());
var nhanvat1 = new nhan_vat_game("Irelia", "Ý chí của lưỡi kiếm", 697.2);
// console.log(nhanvat1.hienthiten());
var dien_thoai = /** @class */ (function () {
    function dien_thoai(ten, gia, sao, mausac) {
        this.ten = ten;
        this.gia = gia;
        this.sao = sao;
        this.mausac = mausac;
    }
    dien_thoai.prototype.showNoiDung = function () {
        return "S\u1EA3n ph\u1EA9m l\u00E0: " + this.ten + ", c\u00F3 gi\u00E1: " + this.gia + ", \u0111\u00E1nh gi\u00E1: " + this.sao + " sao, c\u00F3 " + this.mausac.length + " m\u00E0u";
    };
    return dien_thoai;
}());
var sanpham1 = new dien_thoai("Samsung S8", 10000, 5, [
    "Xanh",
    "Đỏ",
    "Tím",
    "Vàng",
]);
// console.log(sanpham1.showNoiDung());
// Sử dụng state trong class
var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Processing"] = 11] = "Processing";
    state[state["Finish"] = 12] = "Finish";
})(state || (state = {}));
var cong_viec = /** @class */ (function () {
    function cong_viec(id, ten, trangthai) {
        this.id = 1;
        // Có thể truy cập vào thuộc tính, phương thức mà không cần phải khởi tạo instance
        // Cú pháp: className.property - className.method();
        this.ten = 'Công việc số 1';
        this.id = id;
        this.ten = ten;
        this.trangthai = trangthai;
    }
    cong_viec.prototype.thong_tin = function () {
        return "ID: " + this.id + ", T\u00EAn: " + this.ten + ", Tr\u1EA1ng th\u00E1i: " + this.trangthai;
    };
    cong_viec.test = function () {
        return 'Truy cập vào method static!';
    };
    cong_viec.ten2 = 'Công việc số 1';
    return cong_viec;
}());
var congviec1 = new cong_viec(1, "Học TypeScript", state.Finish);
// console.log(cong_viec.ten2);
// console.log(cong_viec.test());

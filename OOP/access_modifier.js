// Public: là kiểu dữ liệu khai báo thuộc loại công cộng, những phương thức hoặc biến với kiểu dữ liệu này sẽ được truy xuất và sử dụng ở đâu cũng được.
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
// Private: là kiểu kiểu dữ liệu khai báo thuộc loại nội bộ, những phương thức hoặc biến với kiểu dữ liệu này sẽ được truy xuất và sử dụng trong nội bộ của Class nơi mà phương thức hoặc biến đó được khai báo.
// Protected: là kiểu dữ liệu khai báo cũng thuộc loại nội bộ như Private, nhưng thêm vào đó những phương thức hoặc biến với kiểu dữ liệu này ngoài việc sử dụng trong nội bộ Class, chúng còn có thể được truy xuất ở Class con kế thừa Class khai báo hàm hoặc phương thức đó.
var KhoaHoc = /** @class */ (function () {
    function KhoaHoc(id, ten, dodai) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    KhoaHoc.prototype.xemKhoaHoc = function () {
        console.log("\n            ID kh\u00F3a h\u1ECDc: " + this.id + "\n            T\u00EAn kh\u00F3a h\u1ECDc: " + this.ten + "\n            \u0110\u1ED9 d\u00E0i kh\u00F3a h\u1ECDc: " + this.dodai + " gi\u1EDD\n          ");
    };
    return KhoaHoc;
}());
var KhoaLapTrinh = /** @class */ (function (_super) {
    __extends(KhoaLapTrinh, _super);
    function KhoaLapTrinh(id, ten, dodai, test_public, filedinhkem) {
        var _this = _super.call(this, id, ten, dodai) || this;
        _this.filedinhkem = filedinhkem;
        return _this;
    }
    KhoaLapTrinh.prototype.xemKhoaHoc = function () {
        _super.prototype.xemKhoaHoc.call(this);
        console.log("File \u0111\u00EDnh k\u00E8m: " + this.filedinhkem);
    };
    return KhoaLapTrinh;
}(KhoaHoc));

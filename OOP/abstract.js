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
var DienThoai = /** @class */ (function () {
    function DienThoai(ten) {
        this.ten = ten;
    }
    return DienThoai;
}());
var android = /** @class */ (function (_super) {
    __extends(android, _super);
    function android(ten) {
        return _super.call(this, ten) || this;
    }
    android.prototype.guitinnhan = function () {
        console.log("Gửi tin nhắn");
    };
    android.prototype.goidienthoai = function () {
        return 'Gọi điện thoại';
    };
    return android;
}(DienThoai));
var samsung = new android("Samsung");
// samsung.guitinnhan();
// console.log(samsung.goidienthoai());

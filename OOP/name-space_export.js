// Tác dụng: 
// 1. Đặt tên class không sợ trùng từ khóa
// 2. Quản lý theo nhóm
var NameSpace;
(function (NameSpace) {
    var String = /** @class */ (function () {
        function String() {
        }
        return String;
    }());
    NameSpace.String = String;
    var Number = /** @class */ (function () {
        function Number() {
        }
        return Number;
    }());
    NameSpace.Number = Number;
})(NameSpace || (NameSpace = {}));
var test_namespace = new NameSpace.String();
var test_namespace = new NameSpace.Number();

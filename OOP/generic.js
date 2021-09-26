// generic trong function thông thường
function generic(x) {
    // Thường sử dụng 'T' để là kí hiệu của generic
    return x;
}
// console.log(generic<string>("LVH"));
// generic trong class
var MayTinh = /** @class */ (function () {
    function MayTinh() {
    }
    MayTinh.xemthongtin = function (x) {
        console.log(x);
    };
    return MayTinh;
}());
// MayTinh.xemthongtin(['a', 'b', 'c']);
// MayTinh.xemthongtin(['a', 1, true]);

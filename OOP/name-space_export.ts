// Tác dụng: 
// 1. Đặt tên class không sợ trùng từ khóa
// 2. Quản lý theo nhóm

module NameSpace {
  export class String {}
  export class Number {}
}
var test_namespace = new NameSpace.String();
var test_namespace = new NameSpace.Number();

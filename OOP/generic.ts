// generic trong function thông thường
function generic<T>(x: T): T {
  // Thường sử dụng 'T' để là kí hiệu của generic
  return x;
}
// console.log(generic<string>("LVH"));

// generic trong class
class MayTinh {
  static xemthongtin<T>(x: T[]): void {
    console.log(x);
  }
}

// MayTinh.xemthongtin<string>(['a','b','c'])
// MayTinh.xemthongtin<any>(['a',1,true])
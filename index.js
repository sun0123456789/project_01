// 为 Array 对象添加一个去除重复项的方法

var arr1 = [];
var flag = true;
Array.prototype.uniq = function () {
  for (let i = 0; i < arr.length; i++) {
    if (arr1.indexOf(arr[i]) == -1) {
      if (arr[i] != arr[i]) {
        if (flag) {
          arr1.push(NaN);
          flag = false;
        }
      } else {
        arr1.push(arr[i]);
      }
    }
  }
  return arr1;
};

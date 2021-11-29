// call是怎么来的,面试必考点
// a.call(b)

var b = {
  name: 'aa'
}
function a() {
  console.log(this.name);
}

a.call(b);//相当于b.a(),如下
var b = {
  name: 'aa',
  // a: function () {
  //   console.log(this.name);
  // }
}
Function.prototype.mycall = function (context) {
  // 调用call的是this，所以我们可以通过判断this类型来判断是否是函数
  if (typeof this !== 'function') {
    // 调用mycall的不是函数就报错
    throw new TypeError('Error');
  }
  // context存在则为context否则为window
  context = context || window;

  // 把调用我的那个函数获取到，复制到context对象中去
  context.fn = this;// b.fn = a;相当于往b对象中添加键值对属性fn:a()

  context.fn();// b.a()

  delete context.fn;// 用完删除防止属性修改
}
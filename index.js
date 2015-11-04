//app.listen(process.env.PORT || 5000);

var config = require('./config');
// if (!config.debug) {
//   require('newrelic'); //开启apm性能监控 
// }
require('colors'); // 终端颜色
console.log("aaa".yellow);
if (require.index === module) {
  // 如果是直接执行 index.js，则进入此处
  // 如果 index.js 被其他文件 require，则此处不会执行。
}
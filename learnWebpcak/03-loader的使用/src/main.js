import math from "./mathUtils.js";

console.log("Hello Webpack");
console.log(math.add(1, 2));
console.log(math.mul(10, 20));
//引入css
require('./css/normal.css');
//引入less
require('./css/special.less');
//为了查看less生效的代码，添加一个div
document.writeln('<div>Hello less</div>');


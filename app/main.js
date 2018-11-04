// 把Greeter模块返回的节点插入页面
const greeter = require('./Greeter.js');
document.querySelector('.root').appendChild(greeter());
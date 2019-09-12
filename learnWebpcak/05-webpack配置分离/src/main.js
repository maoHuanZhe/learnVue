import math from "./js/mathUtils.js";

console.log("Hello Webpack");
console.log(math.add(1, 2));
console.log(math.mul(10, 20));
//引入css
require('./css/normal.css');
//引入less
require('./css/special.less');
//为了查看less生效的代码，添加一个div
document.writeln('<div>Hello less</div>');

// import Vue from 'vue';
//
// const App = {
//     template: '<h2>{{name}}</h2>',
//     data() {
//         return {
//             name: '我是APP组件'
//         }
//     }
// }
//
// new Vue({
//     el: '#app',
//     template: `
//     <div id="app">
//         {{message}}
//         <App/>
//     </div>
//     `,
//     components: {
//         App
//     },
//     data: {
//         message: "Hello Vue"
//     }
// })

import Vue from 'vue';
import App from './complate/App.vue'

new Vue({
    el: '#app',
    template: `
    <div id="app">
        {{message}}
        <App/>
    </div>
    `,
    components: {
        App
    },
    data: {
        message: "Hello Vue"
    }
})
document.writeln('<div>Hello less</div>');


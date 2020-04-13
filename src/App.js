import Vue from 'vue/dist/vue.js'
import sayHello from './say_hello'

// var Vue = require('vue/dist/vue.common.js');
// var app = new Vue({
//     el: '#app',
//     data: {
//         message:'Hello Vue!'
//     }
// })

const app = new Vue ({
    el: '#app',
    data:{
        message: sayHello('IDW')
    }
})
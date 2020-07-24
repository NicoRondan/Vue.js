import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Componentes

// var component1 = Vue.extend({
//   template
// })

// var component2 = Vue.extend({
//   template: '<h3> {{subtitle}} </h3>',
//   data () {
//     return {
//       subtitle: 'Javascript Frameworks List'
//     }
//   }
// })

// var component3 = Vue.extend({
//   template: '<div><ul><framework v-for="fram in frameworks" :key="fram.id">{{fram.title}}</framework></ul></div>',
//   data () {
//     return {
//       frameworks: [
//         {id: 1, title: 'Vue'},
//         {id: 2, title: 'Angular'},
//         {id: 3, title: 'React'}
//       ]
//     }
//   }
// })

// Vue.component('component-greeting', {
//   data () {
//     return {
//       title: 'Hello - Introduction to Components'
//     }
//   },
//   methods: {
//     display () {
//       console.log('hello')
//     }
//   }
// })

// Vue.component('component-title', component2)

// Vue.component('component-list', component3)

// Vue.component('framework', {
//   template: '<li><slot></slot></li>'
// })

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})

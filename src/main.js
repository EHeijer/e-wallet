import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data(){
    return {
      cards: [
        {"id": 1,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#eba434","showing": true,"vendor": "bitcoin"},
        {"id": 2,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#141413","showing": false,"vendor": "ninja"},
        {"id": 3,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#9433f5","showing": false,"vendor": "blockchain"},
        {"id": 4,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#d11563","showing": false,"vendor": "evil"}
      ],
      // vendors: [
      //   {"vendor": "../assets/vendor-bitcoin.svg"}
      // ]
    } 
  },
  methods: {
    getShowingCard() {
      return this.cards.find((card) => card.showing)
    },

    getCardStack(){
      return this.cards.filter((card) => !card.showing)
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')

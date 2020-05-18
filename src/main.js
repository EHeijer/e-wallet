import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data(){
    return {
      cards: [
        {"id": 1,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#eba434","showing": true,"vendor": "bitcoin","textColor": "black"},
        {"id": 2,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#202120","showing": false,"vendor": "ninja","textColor": "#ada2a1"},
        {"id": 3,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#9433f5","showing": false,"vendor": "blockchain","textColor": "black"},
        {"id": 4,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#d11563","showing": false,"vendor": "evil","textColor": "#ada2a1"}
      ],
      
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

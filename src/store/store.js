import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {"id": 1,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#eba434","showing": true,"vendor": "bitcoin","textColor": "black"},
      {"id": 2,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#202120","showing": false,"vendor": "ninja","textColor": "#ada2a1"},
      {"id": 3,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#9433f5","showing": false,"vendor": "blockchain","textColor": "black"},
      {"id": 4,"cardNumber": "1234 5678 9101 1123","name": "CHRISTOFFER WALLENBERG","valid": "12/22","ccv": "123","color": "#d11563","showing": false,"vendor": "evil","textColor": "#ada2a1"}
    ],
    colors: ["#49ab09", "#09aba0", "#ab091c", "#0e09ab", "#616362"]
  },

  mutations: {
    addCard(state, cardToAdd) {
      cardToAdd.id = state.cards.length+1;
      state.cards.push(cardToAdd);
      
    },

    showAnotherCard(state, id) {
      for(let card of state.cards) {
        if(card.id != id){
          card.showing = false;
        } else {
          card.showing = true;
        }
      }
    },

  },
  actions: {

    addCard(context, cardToAdd){
      context.commit('addCard', cardToAdd)
    },

    showAnotherCard(context, id) {
      context.commit('showAnotherCard', id)
    }

  },

  getters: {

    getShowingCard: state => {
      return state.cards.find((card) => card.showing)
    },
    
    getCardStack: state => {
      return state.cards.filter(card => !card.showing)
    },

    getCard: (state) => (id) => {
      return state.cards.find(card => card.id == id)
    }
   
  },
  modules: {
  }
})

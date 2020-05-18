<template>
  <section>
    <Top title="E-WALLET" />
    <Card titleOfCard="ACTIVE CARD" :card="getShowingCard"/>
    <CardStack @showAnotherCard="showAnotherCard" :cards="cards"/>
    <router-link to="/addCard"><button>ADD A NEW CARD</button></router-link>

  </section>
</template>

<script>

import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardStack from '@/components/CardStack.vue'

export default {
  name: 'Home',
  components: {
    Top,
    Card,
    CardStack
  },

  data() {
    return {
      cards: this.$root.cards
    }
  },

  methods: {
    showAnotherCard(payload) {
      for(let card of this.cards){
        if(card.id != payload){
          card.showing = false;
        }else {
          card.showing = true;
        }
      }
    }
  },

  computed: {
    getShowingCard() {
      return this.$root.getShowingCard();
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    
    
    button {
      padding: 1.6rem 5rem;
      border: 1.5px solid black;
      text-align: center;
      text-decoration: none;
      background: white;
      font-size: 1.3rem;
      font-weight: 700;
      border-radius: 10px;
    }
  }
</style>

<template>
  <section>
    <Top title="E-WALLET" />
    <Card titleOfCard="ACTIVE CARD" :card="getShowingCard"/>
    <CardStack class="card-stack" :cards="cards"/>
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

  methods: {
    
  },

  computed: {
    getShowingCard() {
      return this.$store.getters.getShowingCard
    },

    cards() {
      return this.$store.state.cards
    }
  }
}
</script>

<style lang="scss" scoped>
    
    .card-stack {
      margin-bottom: 1rem;
    }

    button {
      padding: 1.3rem 4rem;
      border: 1.5px solid black;
      text-align: center;
      text-decoration: none;
      background: white;
      font-size: 1.3rem;
      font-weight: 700;
      border-radius: 10px;
    }
  
</style>

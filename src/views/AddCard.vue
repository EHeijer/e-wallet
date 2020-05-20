<template>
    <section>
        <Top title="ADD A NEW BANK CARD" addCardView />
        <div @click="changeColor">
            <Card class="card"  titleOfCard="NEW CARD" :card="cardExample" addCardView/>
        </div>
        <CardForm :card="cardExample"/>
    </section>
</template>
<script>
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
import CardForm from '@/components/CardForm.vue'
export default {
  components: {
    Top,
    Card,
    CardForm
  },

  data() {
      return {
          cardExample: {
            id: 0,
            cardNumber: "XXXX XXXX XXXX XXXX",
            name: "FIRSTNAME LASTNAME",
            valid: "MM/YY",
            ccv: "",
            color: "#d6d0d0",
            showing: false,
            vendor: "bitcoin"
             
          },

          colors: ["#49ab09", "#09aba0", "#ab091c", "#0e09ab", "#616362"]
      }
  },

  methods: {
      changeColor() {
          let randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
          return this.cardExample.color = randomColor; 
      }
  },

}
</script>

<style lang="scss" scoped>
    .card {
        color: black;
    }
</style>
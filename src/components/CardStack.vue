<template>
    <section class="card-stack-container">
        
        <article class="card-stack" >
            <Card  
                v-for="(stackCard,i) in getCardStack" 
                :card="stackCard" 
                :key="stackCard.id"
                @click.native="showAnotherCard(stackCard.id)"
                :style="cardStack(i)"
                
            ></Card>
        </article>
        
        

    </section>
</template>
<script>
import Card from './Card'
export default {
    components: {
        Card
    },
    props: {
        cards: Array
    },

    data() {
        return {
            cardStack(i) {
                return {
                    marginTop: i * 2 + "rem",
                    zIndex: i
                }
            }
        }
    },
    
    methods: {
        showAnotherCard(id) {
            this.$store.dispatch('showAnotherCard', id)
        }
    },

    computed: {
        getCardStack() {
            return this.$store.getters.getCardStack
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-stack-container {
        width: 350px;
        margin: auto; 
        height: 30rem;
        .card-stack {
            display: grid;
            grid-auto-rows: 1.5rem;
            margin-top: 1.1rem;
        }
        
    }

  

</style>
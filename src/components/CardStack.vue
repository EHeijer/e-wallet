<template>
    <section class="card-stack-container">
        
        <article class="card-stack" >
            <Card  
                v-for="stackCard in getCardStack" 
                :card="stackCard" 
                :key="stackCard.id"
                @click.native="showAnotherCard(stackCard.id)"
                
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
    
    methods: {
        showAnotherCard(id) {
            this.$emit("showAnotherCard", id);
        }
    },

    computed: {
        getCardStack() {
            return this.$root.getCardStack();
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-stack-container {
        width: 350px;
        margin: auto; 
        .card-stack {
            display: grid;
            grid-auto-rows: 2.5rem;
            
            margin-top: 2rem;
            margin-bottom: 13rem;
            
            
        }
        
    }

</style>
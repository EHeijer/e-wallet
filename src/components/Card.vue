<template>
    <section class="container">
        <h5>{{titleOfCard}}</h5>
        <article class="card" :style="{background: card.color}" :class="{cardToAdd: addCardView}">
            <div class="symbols">
                <img src="../assets/chip-dark.svg" alt="">
                <img v-bind:src="showBitcoin" v-if="card.vendor === 'bitcoin'">
                <img v-bind:src="showNinja" v-else-if="card.vendor === 'ninja'">
                <img v-bind:src="showBlockchain" v-else-if="card.vendor === 'blockchain'">
                <img v-bind:src="showEvil" v-else-if="card.vendor === 'evil'">
            </div>
            <div class="number">{{card.cardNumber}}</div>
            <article class="text">
                <div>
                    <h5>CARDHOLDER NAME</h5>
                    <p>{{card.name}}</p>
                </div>
                <div>
                    <h5>VALID THRU</h5>
                    <p>{{card.valid}}</p>
                </div>
            </article>
        </article>
    </section>
</template>
<script>
export default {
    props: {
        addCardView: Boolean,
        card: Object,
        titleOfCard: String
    },
    data() {
        return {
            bitcoin: "bitcoin.svg",
            ninja: "ninja.svg",
            blockchain: "blockchain.svg",
            evil: "evil.svg"
        }
    },
    computed: {
        showBitcoin() {
            return require('../assets/vendor-' + this.bitcoin)
        },

        showNinja() {
            return require('../assets/vendor-' + this.ninja)
        },

        showBlockchain() {
            return require('../assets/vendor-' + this.blockchain)
        },

        showEvil() {
            return require('../assets/vendor-' + this.evil)
        }
    }
}
</script>

<style lang="scss" scoped>
   
    .container{
        
        .card {
            background: #eba434;
            border-radius: 9px;
            padding: 0;
            box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
            line-height: 1.6;
            height: 230px;
            width: 350px;
            margin: auto;
            .symbols {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                img {
                    margin: 1rem;
                }
                .vendor {
                    height: 1rem;
                }
            }
            .number {
                font-size: 1.8rem;
                padding: 0;
            }

            .text {
                display: grid;
                grid-template-columns: 75% 25%;
                justify-content: space-between;
                text-align: left;
                max-width: 95%;
                margin: auto;
            }
        }
    }
    h5 {
        margin: 0;
    }
    p {
        margin-top: 0;
        margin-bottom: 0;
    }
</style>
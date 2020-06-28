<template>
    <section class="container">
        <h6>{{titleOfCard}}</h6>
        <article class="card" :style="{background: card.color, color: card.textColor}" :class="{cardToAdd: addCardView}">
            <div class="symbols">
                <img src="../assets/chip-dark.svg" alt="" v-if="card.showing || addCardView">
                <img src="../assets/chip-light.svg" alt="" v-else>
                <img :src="require(`@/assets/vendor-${card.vendor}.svg`)" alt="">
            </div>
            <div class="number">{{card.cardNumber}}</div>
            <article class="text">
                <div>
                    <p>CARDHOLDER NAME</p>
                    <h3>{{card.name}}</h3>
                </div>
                <div class="valid">
                    <p>VALID THRU</p>
                    <h3>{{card.valid}}</h3>
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
        }
    },
}
</script>

<style lang="scss" scoped>
    .stackCard {
        color: rgb(49, 47, 47);
    }
    .container{
        h6 {
            color: grey;
            font-size: .8rem;
            margin-bottom: 10px;
        }
        .card {
            background: #eba434;
            border-radius: 9px;
            padding: 0;
            box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
            line-height: 1.6;
            height: 220px;
            width: 330px;
            margin: auto;
            
            .symbols {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                img {
                    margin: 1rem 1rem .5rem 1rem;
                }
                .vendor {
                    height: 1rem;
                }
            }
            .number {
                font-size: 1.7rem;
                padding: 0;
                font-family: 'PT Mono', monospace;
                margin-bottom: .6rem;
            }

            .text {
                display: grid;
                grid-template-columns: 75% 25%;
                justify-content: space-between;
                text-align: left;
                max-width: 95%;
                margin: auto;

                .valid {
                    text-align: right;
                }
            }
        }
    }
    h5 {
        margin: 0;
        font-family: 'PT Mono', monospace;
    }
     h3 {
        margin: 0;
        font-family: 'PT Mono', monospace;
        font-weight: 500;
        font-size: 1.1rem;
    }
    p {
        margin-top: 0;
        margin-bottom: 0;
        font-family: 'PT Mono', monospace;
        font-size: .8rem;
    }
</style>
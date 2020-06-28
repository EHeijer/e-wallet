<template>
    <article class="form">
        <div @click="changeColor">
            <Card class="card"  titleOfCard="NEW CARD" :card="cardExample" addCardView/>
        </div>
        <div class="number">
            <label for="number">CARD NUMBER</label>
            <input type="text" v-model="cardToAdd.cardNumber" placeholder="XXXX XXXX XXXX XXXX" @input="updateNumber"/>
        </div>
        <div class="name">
            <label for="name">CARDHOLDER NAME</label>
            <input type="text" v-model="cardToAdd.name" placeholder="FIRSTNAME LASTNAME"  @input="updateName"/>
        </div>
        <div class="valid-ccv">
            <div class="valid">
                <label for="valid">VALID THRU</label>
                <input type="text" placeholder="MM/YY" v-model="cardToAdd.valid"  @input="updateValid"/>
            </div> 
            <div class="ccv">
                <label for="ccv">CCV</label>
                <input type="number" placeholder="" v-model="cardToAdd.ccv"/>
            </div>   
        </div>
        <div class="vendor">
            <label>VENDOR</label>
            <select id="vendors" name="vendors" v-model="cardToAdd.vendor" @change="updateVendor">
                <option value="bitcoin">Bitcoin</option>
                <option value="ninja">Ninja corp</option>
                <option value="blockchain">Blockchain INC</option>
                <option value="evil">Evil corp</option>
            </select>
        </div>
        <button @click="addCard">ADD CARD</button>
        
    </article>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
    components: {
        Card
    },
    props: {
    }, 
   data() {
       return {
            cardExample: {
                id: 0,
                cardNumber: "XXXX XXXX XXXX XXXX",
                name: "Firstname Lastname",
                valid: "MM/YY",
                ccv: "",
                color: "#d6d0d0",
                showing: false,
                vendor: "bitcoin"
            },
            cardToAdd: {...this.cardExample}
       }
   },

   methods: {
        addCard(){
            if(this.$store.state.cards.length >= 6){
                alert("You can't add more cards");
                return
            }
            this.$store.dispatch('addCard', this.cardToAdd)
            this.$router.push("/");
        },

        changeColor() {
          let randomColor = this.$store.state.colors[Math.floor(Math.random() * this.$store.state.colors.length)];
          this.cardToAdd.color = randomColor;
          return this.cardExample.color = randomColor; 
        },

        updateNumber() {
            this.cardExample.cardNumber = this.cardToAdd.cardNumber
        },

        updateName() {
            this.cardExample.name = this.cardToAdd.name
        },

        updateValid() {
            this.cardExample.valid = this.cardToAdd.valid
        },

        updateVendor() {
            this.cardExample.vendor = this.cardToAdd.vendor
        }

    },

    mounted() {
        this.cardToAdd.vendor = this.cardExample.vendor
    }
}
</script>

<style lang="scss" scoped>
    input {
        font-family: 'PT Mono', monospace;
        
    }
    .form {
        margin: 2rem auto;
        display: grid;
        justify-content: center;
        text-align: left;
        width: 330px;
        
        .card {
            margin-bottom: 2rem;
            text-align: center;
        }
        .number {
            display: flex;
            flex-direction: column;
            width: 330px;
            margin: auto;
            margin-bottom: 1rem;
            label {
                font-size: .8rem;
            }
            input {
                font-size: 1.3rem;
                box-sizing: border-box;
                padding: 1.4rem 0 1.4rem 0.5rem;
                border-radius: 10px;
                border: solid rgb(110, 110, 110) 1.5px;
            }
        }

        .name {
            display: flex;
            flex-direction: column;
            width: 330px;
            margin: auto;
            margin-bottom: 1rem;

            label {
                font-size: .8rem;
            }
            input {
                font-size: 1.3rem;
                padding: 1.3rem 0 1.3rem .5rem;
                border-radius: 10px;
                border: solid rgb(110, 110, 110) 1.5px;
            }
        }

        .valid-ccv {
            display: grid;
            grid-template-columns: 45% 45%; 
            justify-content: space-between;
            width: 330px;
            margin: auto;
            .valid {
                display: flex;
                flex-direction: column;
                
                 label {
                    font-size: .8rem;
                }
                input {
                    font-size: 1.3rem;
                    padding: 1.3rem 0 1.3rem .5rem;
                    border-radius: 10px;
                    border: solid rgb(110, 110, 110) 1.5px;
                }
            }
            .ccv {
                display: flex;
                flex-direction: column;
                
                label {
                    font-size: .8rem;
                }
                input {
                    padding: 1.3rem 0 1.3rem .5rem;
                    border-radius: 10px;
                    border: solid rgb(110, 110, 110) 1.5px;
                }
            }
        }

        .vendor {
            display: flex;
            flex-direction: column;
            width: 330px;
            margin: auto;
            margin-top: 1rem;

            label {
                    font-size: .8rem;
                }

            #vendors {
                padding: 1.3rem 0 1.3rem .5rem;
                border-radius: 10px;
                border: solid rgb(110, 110, 110) 1.5px;
                font-size: 1.2rem;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-image: url(../assets/arrow.png);
                background-repeat: no-repeat;
                background-position: 18rem 1.6rem;
                option {
                    width: 100%;
                    padding: 0;
                }
            }
        }

        button {
            margin-top: 3rem;
            width: 100%;
            padding: 1.8rem 0;
            border: 1px solid black;
            text-align: center;
            text-decoration: none;
            color: white;
            font-size: 1.3rem;
            background: black;
            font-weight: 700;
            border-radius: 10px;
        }
    }
</style>
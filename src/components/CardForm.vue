<template>
    <article class="form">
        <div class="number">
            <label for="number">CARD NUMBER</label>
            <input type="text" v-model="cardToAdd.cardNumber"/>
        </div>
        <div class="name">
            <label for="name">CARDHOLDER NAME</label>
            <input type="text" v-model="cardToAdd.name" placeholder="FIRSTNAME LASTNAME"/>
        </div>
        <div class="valid-ccv">
            <div class="valid">
                <label for="valid">VALID THRU</label>
                <input type="text" v-model="cardToAdd.valid"/>
            </div> 
            <div class="ccv">
                <label for="ccv">CCV</label>
                <input type="text" v-model="cardToAdd.ccv"/>
            </div>   
        </div>
        <div class="vendor">
            <label>VENDOR</label>
            <select id="vendors" name="vendors" v-model="cardToAdd.vendor">
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
export default {
   props: {
        card: Object
    }, 
   data() {
       return {
            cardToAdd: this.card 
       }
   },

   methods: {
        addCard(){
            this.$emit("addCard", this.cardToAdd);
            this.cardToAdd = { 
               id: this.$root.cards.length+1,
               cardNumber: "",
               name: "",
               valid: "",
               ccv: "",
               color: "#d11563",
               showing: false,
               vendor: ""  
           }
        }
    }
}
</script>

<style lang="scss" scoped>
    .form {
        margin: 2rem auto;
        display: grid;
        justify-content: center;
        text-align: left;
        width: 350px;
        
        .number {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;

            label {
                font-size: .8rem;
            }
            input {
                box-sizing: border-box;
               padding: 1.6rem 0 1.6rem .5rem;
                border-radius: 10px;
                border: solid rgb(110, 110, 110) 1.5px;
            }
        }

        .name {
            display: flex;
            flex-direction: column;
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

            .valid {
                display: flex;
                flex-direction: column;
                
                 label {
                    font-size: .8rem;
                }
                input {
                
                    padding: 1.6rem 0 1.6rem .5rem;
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
                    padding: 1.6rem 0 1.6rem .5rem;
                    border-radius: 10px;
                    border: solid rgb(110, 110, 110) 1.5px;
                }
            }
        }

        .vendor {
            display: flex;
            flex-direction: column;
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
                background-position: 20rem 1.6rem;
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
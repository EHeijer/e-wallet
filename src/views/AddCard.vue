<template>
    <section>
        <Top title="ADD A NEW BANK CARD" addCardView />
        <CardForm/>
    </section>
</template>
<script>
import Top from '@/components/Top.vue'
import CardForm from '@/components/CardForm.vue'
export default {
  components: {
    Top,
    CardForm
  },

  data() {
      return {
      }
  },

  methods: {
  },

}
</script>

<style lang="scss" scoped>
    
</style>
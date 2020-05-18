<template>
    <header>
        <h1>{{title}}</h1>
    </header>

</template>
<script>
export default {
   props: {
       title: String
   }
}
</script>

<style>
    h1 {
        font-size: 2.2rem;
        font-weight: bolder;
        max-width: 15rem;
        margin: auto;
    }
</style>
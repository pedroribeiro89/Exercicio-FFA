<template>
    <section>
        <h1>{{product.name}} (id: {{product.id}})</h1>
        <p>price: <strong>{{product.price}}</strong></p>
    </section>
</template>

<script>
    export default {
        name: "ProductItem",
        props: {
            product: Object
        }
    }
</script>

<style scoped>
    section {
        border: 1px solid black;
        width: 300px;
        margin-bottom: 10px;
    }

    h1 {
        font-size: 15px;
    }

    strong {
        font-size: 25px;
    }
</style>

<template>
    <section>
        <router-link :to="productUrl">
            <h1>{{product.name}} (id: {{product.id}})</h1>
            <p>price: <strong>{{product.price}}</strong></p>
        </router-link>
    </section>
</template>

<script>
    export default {
        name: "ProductItem",
        props: {
            product: Object
        },
        computed: {
            productUrl() { return `/product/${this.product.id}`; }
        }
    }
</script>

<style scoped>
    section {
        border: 1px solid black;
        width: 300px;
        margin: 10px auto;
        cursor: pointer;
    }

    h1 {
        font-size: 15px;
    }

    strong {
        font-size: 25px;
    }
</style>

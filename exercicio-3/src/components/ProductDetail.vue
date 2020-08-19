<template>
    <section v-if="product.id">
        <h1>{{product.name}} (id: {{product.id}})</h1>
        <p>price: <strong>{{product.price}}</strong></p>
    </section>
    <section v-else>
        <h1>Produto não existe</h1>
    </section>
</template>

<script>
    export default {
        name: "ProductDetail",
        computed: {
            product() {
                const productList = this.$store.state.productList;
                for (let p of productList) {
                    if (p.id === +this.$route.params.id) { return p; }
                }
                return {};
            }
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

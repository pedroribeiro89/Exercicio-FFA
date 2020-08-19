<template>
    <article>
        <h1>Lista de Produtos ({{listSize}})</h1>
        <ProductItem v-for="item in productList" v-bind:key="item.id" :product="item"></ProductItem>
    </article>
</template>

<script>
    import ProductItem from './ProductItem.vue'

    export default {
        name: "ProductsList",
        components: {
            ProductItem
        },
        props: {
            list: Array
        },
        computed: {
            listSize() { return this.productList.length; },
            productList() {
                return this.$store.state.productList;
            }
        }
    }
</script>

<style scoped>

</style>

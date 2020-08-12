<template>
    <article>
        <h1>Lista de Produtos ({{listSize}})</h1>
        <ProductItem v-for="item in list" v-bind:key="item" :product="item"></ProductItem>
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
            listSize() { return this.list.length; }
        }
    }
</script>

<style scoped>

</style>

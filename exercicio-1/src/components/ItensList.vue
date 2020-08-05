<template>
    <div>
        <Item v-for="i in itens" v-bind:key="i" :item="i"/>
    </div>

</template>

<script>
    import Item from './Item.vue'

    export default {
        name: "ItensList",
        components: {
            Item
        },
        props: {
            itens: Array
        }
    }
</script>

<style scoped>
    div {
        float: left;
        width: 85%;
        margin-top: 15px;
    }
</style>

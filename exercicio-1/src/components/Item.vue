<template>
    <article>
        <img alt="Vue logo" :src="item.img" >
        <p>{{item.text}}</p>
    </article>
</template>

<script>
    export default {
        name: "Item",
        props: {
            item: Object
        }
    }
</script>

<style scoped>
    article {
        display: flex;
    }
    img {
        width: 10%;
    }
    p {
        padding: 10px;
        border: 1px solid black;
    }

</style>

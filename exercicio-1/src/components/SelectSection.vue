<template>
    <nav>
        <a v-for="section in sections" v-bind:key="section">
            {{section.title}}
        </a>
    </nav>
</template>

<script>
    export default {
        name: "SelectSection",
        props: {
            sections: []
        }
    }
</script>

<style scoped>
    nav {
        border: 1px solid black;
        padding: 15px;
        display: flex;
        margin-top: 10px;
    }
    nav a {
        font-size: 25px;
        margin: auto;
    }
</style>

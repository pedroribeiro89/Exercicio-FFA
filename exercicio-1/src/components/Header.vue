<template>
    <header>
        <img alt="Vue logo" src="../assets/logo.png">
        <div>
            <nav>
                <a>Topic 1</a>
                <a>Topic 2</a>
                <a>Topic 3</a>
                <a>Topic 4</a>
            </nav>
            <input type="search" placeholder="pesquisar">
        </div>

    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    header {
        overflow: hidden;
        padding: 10px;
        border-bottom: 1px solid black;
    }
    img {
        width: 100px
    }
    div {
        float: right;
    }
    nav a {
        margin-right: 10px;
    }
    input {
        margin-top: 55px;
    }
</style>

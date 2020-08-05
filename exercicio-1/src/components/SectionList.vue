<template>
    <aside>
        <ul>
            <li v-for="section in sections" v-bind:key="section">
                {{section.title}}
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "SectionList",
        props: {
            sections: []
        }
    }
</script>

<style scoped>
 aside {
     float: right;
     width: 10%;
     padding: 10px;
     font-size: 20px;
     border: 1px solid black;
     margin-top: 15px;
 }
</style>

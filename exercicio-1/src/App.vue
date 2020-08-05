<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <Header />
    <SelectSection :sections="sections.slice(0, 5)"/>
    <ItensList :itens="itens" />
    <SectionList :sections="sections"/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Header from './components/Header.vue'
import SelectSection from './components/SelectSection.vue'
import ItensList from './components/ItensList.vue'
import SectionList from './components/SectionList.vue'


export default {
  name: 'App',
  components: {
    Header,
    SelectSection,
    ItensList,
    SectionList
  },
  data() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros nunc. Suspendisse viverra nisi nibh, euismod blandit leo sagittis scelerisque. Nunc cursus, risus quis feugiat varius, ipsum nibh ultrices nibh, facilisis sollicitudin orci ante id turpis. Duis scelerisque et neque vitae finibus. Proin eget porttitor leo, vel placerat odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui mattis ex venenatis pulvinar consectetur sed elit. Maecenas laoreet ex eget auctor fermentum. Nunc nec pulvinar lectus, non cursus mauris. Quisque rutrum est ut tortor ullamcorper ornare.';
    return {
      sections: [
        {title: "Section 1"},
        {title: "Section 2"},
        {title: "Section 3"},
        {title: "Section 4"},
        {title: "Section 5"},
        {title: "Section 6"},
        {title: "Section 7"},
        {title: "Section 8"},
        {title: "Section 9"},
        {title: "Section 10"},
        {title: "Section 11"},
        {title: "Section 12"},
        {title: "Section 13"},
        {title: "Section 14"},
        {title: "Section 15"},
      ],
      itens: [
        {img: 'https://vuejs.org/images/logo.png', text: lorem},
        {img: 'https://vuejs.org/images/logo.png', text: lorem},
        {img: 'https://vuejs.org/images/logo.png', text: lorem},
      ]
    };
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>

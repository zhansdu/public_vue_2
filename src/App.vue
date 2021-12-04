<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="(l,index) in ls" :key="index">{{l}}</div>
    <div class="color-red" v-if="visible">{{visible}}</div>
    <div>{{count}}</div>
    <div>{{countDouble}}</div>
    <button @click="changeCount()">Add +1 to the count</button>
    <component-vue :name="'Yelnur'"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ComponentVue from './components/Component.vue'
import count from './mixins/count'
export default {
  name: 'App',
  mixins:[count],
  components: {
    HelloWorld,
    ComponentVue
  },
  data(){
    return{
      ls:[1,2,3,4,5],
      visible:true
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

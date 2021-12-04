<template>
  <div>
    <div>This is a hello world component</div>
    <component-vue/>
    <div>{{count}}</div>
    <div>{{countDouble}}</div>
    <button @click="changeCount()">Add 1 to the count</button>
  </div>
</template> 

<script>
import ComponentVue from './Component.vue'
import count from '../mixins/count'
export default {
  name: 'HelloWorld',
  mixins:[count],
  components:{
    ComponentVue
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

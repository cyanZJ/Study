<template>
  <div id="app">
    <div>{{$store.state.counter}}</div>
    <input type="button" value="+" @click="add">
    <input type="button" value="-" @click="reduce">
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data(){
    return{
      num:0
    }
  },
  methods:{
    add(){
      this.$store.dispatch('add');
    },
    reduce(){
      this.$store.dispatch('reduce');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

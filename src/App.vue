<template>
  <Navbar></Navbar>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar },
  setup() {
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>

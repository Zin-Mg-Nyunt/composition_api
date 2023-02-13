<template>
  <div class="home">
    <h1>Bloggy Vue</h1>
    <div class="navbar">
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'create'}">Create</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  h1{
    text-align: left;
    color: #c5c5c5;
    font-size: 50px;
  }
  .navbar{
    display: flex;
    justify-content: right;
  }
  a{
    margin-left: 1.3rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    color: #c5c5c5;
  }
  .router-link-active{
    color: #111111;
  }
</style>
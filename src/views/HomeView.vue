<template>
  <div class="home">
    <div v-if="error">
    {{error}}
    </div>
    <div v-if="posts.length>0">
      <PostList :posts="posts"></PostList>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>

import Spinner from '../components/Spinner'
import getPosts from "../composables/getPosts"
import PostList from '../components/PostList'
export default {
  components: {
    Spinner,
    PostList },
  setup(){
    let {posts,error,load} = getPosts()
    load()
    return {posts,error}
  }
}
</script>

<style>
  .home{
    max-width: 1200px;
    margin: 10px auto;
  }
  .home h1{
    text-align: center;
  }
</style>
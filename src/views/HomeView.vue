<template>
  <div v-if="error">
    {{error}}
  </div>
  <div v-if="posts.length>0">
    <PostList :posts="posts"></PostList>
  </div>
  <div v-else>
    <Spinner></Spinner>
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

</style>
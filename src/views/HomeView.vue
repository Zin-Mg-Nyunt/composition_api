<template>
  <div v-if="error">
    {{error}}
  </div>
  <div v-if="posts.length>0">
    <PostList :posts="posts"></PostList>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts"
import PostList from '../components/PostList'
export default {
  components: { PostList },
  setup(){
    let {posts,error,load} = getPosts()
    load()
    return {posts,error}
  }
}
</script>

<style>

</style>
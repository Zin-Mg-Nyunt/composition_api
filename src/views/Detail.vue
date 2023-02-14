<template>
  <div class="home">
      <div v-if="error">
    {{error}}
    </div>
    <div v-else>
      <h1>Post Detail</h1>
      <div v-if="post">
          <h3>{{post.title}}</h3>
          <p>{{post.body}}</p>
      </div>
      <div v-else>
          <Spinner></Spinner>
      </div>
    </div>
  </div>

</template>

<script>

import Spinner from '../components/Spinner'
import getPost from "../composables/getPost";
import { useRoute } from "vue-router";
export default {
  components: {
    Spinner},
    props:['id'], // this.$route.params.id
    setup(){        
        let route = useRoute();
        let {post,error,load}=getPost(route.params.id) // instead using props.id
        load()

        return {post,error}
    }
}
</script>

<style>

</style>
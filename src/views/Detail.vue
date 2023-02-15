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

<style scoped>
h3{
    display: inline-block;
    padding: .5rem 1rem;
    width: 150px;
    position: relative;
  }
  h3::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: yellow;
    z-index: -1;
    transform: rotate(-2deg);
  }
  p{
    margin: 2rem 0 1rem;
  }
</style>
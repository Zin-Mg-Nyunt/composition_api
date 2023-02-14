<template>
  <router-link :to="{name: 'detail', params:{id:post.id}}">
    <h3>{{post.title}}</h3>
  </router-link>
  <p>{{cutPostBody}}</p>
  <div v-for="tag in post.tags" :key="tag" class="pill">
    <router-link :to="{name: 'tag', params: {tag}}">{{tag}}</router-link>
  </div>
  <div class="divider"></div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ["post"],
    setup(props){
        let cutPostBody = computed(()=> props.post.body.substring(0,150)+"...")

        return {cutPostBody}
    }
}
</script>

<style>
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
  .divider{
    width: 100%;
    border: 1px solid #ebebeb;
  }
  a{
    text-decoration: none;
  }
</style>
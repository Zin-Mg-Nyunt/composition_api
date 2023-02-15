<template>
  <div class="tag-cloud">
  <h3>Tag Cloud</h3>
    <div v-for="tag in uniqueTags" :key="tag">
      <router-link :to="{name:'tag', params:{tag}}">{{tag}}</router-link>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  props: ["posts"],
  setup(props){
    let tags= ref([]);
    props.posts.forEach(post => {
      post.tags.forEach(tag => {
        tags.value.push(tag);
      })
    });

    let uniqueTags=tags.value.filter((tag,index,array) => array.indexOf(tag)===index);

    return {uniqueTags}
  }
}
</script>

<style>
  .tag-cloud h3{
    padding: 0 0 1rem 0;
    border-bottom: 2px solid #ebebeb;
  }
  .tag-cloud div{
    display: inline-block;
  }
  .tag-cloud a{
    text-decoration: none;
    color: #c5c5c5;
    font-size: 1.2rem;
    padding: 0 10px 0 0;
  }
  .tag-cloud a.router-link-active{
    color: #e2e22e;
  }
</style>
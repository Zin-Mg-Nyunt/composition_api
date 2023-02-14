<template>
    <div v-if="error">
        {{error}}
    </div>
    <div v-if="filteredPosts.length">
        <PostList :posts="filteredPosts"></PostList>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
</template>

<script>
import PostList from '../components/PostList'
import Spinner from '../components/Spinner'
import getPosts from '@/composables/getPosts'
import { computed } from '@vue/runtime-core';
export default {
  components: {
    PostList, Spinner },
    props : ["tag"],
    setup(props){
        let {posts,error,load}=getPosts();
        load();

        let filteredPosts = computed(()=>{
            return posts.value.filter(post => post.tags.includes(props.tag))
        })

        return {posts,error,filteredPosts}
    }
}
</script>

<style>

</style>
<template>
    <div class="home">
        <div v-if="error">
            {{error}}
        </div>
        <div v-if="filteredPosts.length" class="layout">
            <div>
                <PostList :posts="filteredPosts"></PostList>
            </div>
            <div>
                <TagCloud :posts="posts"></TagCloud>
            </div>
        </div>
        <div v-else>
            <Spinner></Spinner>
        </div>
    </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostList from '../components/PostList'
import Spinner from '../components/Spinner'
import getPosts from '@/composables/getPosts'
import { computed } from '@vue/runtime-core';
export default {
  components: {
    TagCloud,
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
<template>
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
        <p>Loading....</p>
    </div>
  </div>

</template>

<script>
import getPost from "../composables/getPost";
export default {
    props:['id'],
    setup(props){        
        let {post,error,load}=getPost(props.id)
        load()

        return {post,error}
    }
}
</script>

<style>

</style>
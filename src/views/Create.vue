<template>
  <h1>Create Post</h1>
  <form @submit.prevent="addPost">
    <label>Title</label>
    <input type="text" required v-model="title">

    <label>Body</label>
    <textarea rows="5" required v-model="body"></textarea>

    <label>Tags</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyUp">
    <div>
      <div v-for="tag in tags" :key="tag" class="pill">
        {{tag}}
      </div>
    </div>

    <button>Create</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from "vue-router";
export default {
    setup(){
        let router = useRouter();
        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([])
        let handleKeyUp=()=>{
            if(!tags.value.includes(tag.value) && !tag.value==""){
                tags.value.push(tag.value)
            }
            tag.value=""
        }
        let addPost=async()=>{
            await fetch("http://localhost:3000/posts",{
                method : "POST",
                headers : {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    title : title.value,
                    body : body.value,
                    tags : tags.value
                })
            })
            // redirect to home page by using useRouter
            // this.$router.push("/")
            router.push("/")
        }
        return {title,body,tag,handleKeyUp,tags,addPost}
    }
}
</script>

<style>
    h1{
        text-align: center;
    }
    form{
        display: block;
        max-width: 400px;
        margin: 2rem auto;
    }
    label{
        display: block;
        text-align: left;
        font-size: 1.5rem;
        margin: 1rem 0;
        color: #9c9c9c;
        font-weight: bold;
        letter-spacing: 2px;
    }
    input,textarea{
        width: 100%;
        font-size: 1.2rem;
        padding: .6rem;
        border: 1px solid #9c9c9c;
        border-radius: .7rem;
        margin: .3rem 0 1rem;
    }
    div{
        text-align: left;
        margin-bottom: 1rem;
    }
    .pill{
        display: inline-block;
        padding: .7rem;
        border-radius: 40px;
        background-color: #b1b1b1;
        color: #f7f5f5;
        /* font-size: 1.2rem; */
        margin: .5rem;
        margin-left: 0;
    }
    button{
        display: block;
        margin: 1rem auto 0;
        padding: .8rem 1rem;
        border-radius: 1rem;
        font-size: 1.4rem;
        background-color: #6fff6f;
        border: none;
        color: #f7f5f5;
        font-weight: bold;
        cursor: pointer;
    }
    
</style>
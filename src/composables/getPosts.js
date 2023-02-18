import { db } from '@/firebase/config'
import { ref } from '@vue/reactivity'

let getPosts=()=>{
    let error = ref("")
    let posts = ref([])
    let load =async()=>{
      try {
        let response = await db.collection("posts").get()
        posts.value = response.docs.map(doc => {
          return {id:doc.id,...doc.data()}
        })
        // response.docs.map(doc => console.log({id:doc.id,...doc.data()}))
      } catch (err) {
        error.value = err.message;
      }
    }
    return {posts,error,load}
}
export default getPosts;
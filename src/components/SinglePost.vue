<template>
  <h3>{{post.title}}</h3>
  <p>{{cutPostBody}}</p>
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

</style>
<template>
  <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
    .spin{
        width: 40px;
        height: 40px;
        border: 3px solid transparent;
        border-top-color: blue;
        animation: spin 1s infinite;
        border-radius: 50%;
        margin: 30px auto;
    }
    @keyframes spin {
        to{
            transform: rotate(360deg);
        }
    }
</style>
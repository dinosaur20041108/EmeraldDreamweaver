<template>
<div class="passage-container">
    <img src="../static/Whale.jpg" class="background">
    <br>
    <Passage v-for="i in 7" :index="i"/>
</div>

</template>

<script setup>
import Passage from '@/components/passage.vue'


</script>


<style scoped>
.background{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 30%);
    mask-mode: match-source;
    z-index: 0;
}
.passage-container{

    margin-left: auto;
    margin-right: auto;
    padding-top: 10vh;
    width: 100%;
    height: 100%;
    /* border: black solid 1px; */
    background: linear-gradient(180deg, pink, skyblue);
    overflow: hidden;
}

</style>
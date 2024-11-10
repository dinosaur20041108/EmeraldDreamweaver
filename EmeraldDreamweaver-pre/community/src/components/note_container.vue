<template>
    <div class="note-container">
        <Note v-for="index in 10" :index="index"/>
    </div>
</template>

<script setup>
import Note from './note.vue'
</script>

<style scoped>
.note-container{
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
    width: 90vw;
    /* border: black solid 1px; */
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    /* align-items: center; */
    padding: 30px;
}
</style>
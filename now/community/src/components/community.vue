<template>
<div class="community">
    <div class="background">
        <img src="../static/pond.jpg" style="width: 100%;height: 100vh;object-fit: cover;position: absolute;top: 0;left: 0;">
		<video src="../static/pond.mp4" style="width: 100%;height: 100vh;object-fit: cover;position: absolute;top: 0;left: 0;" autoplay="autoplay" loop="loop" muted="muted"></video>
    </div>
<NoteContainer />
</div>

</template>

<script setup>
import NoteContainer from './note_container.vue'
</script>

<style scoped>

.community{
    position: absolute;
    width: 100%;
    background:linear-gradient(rgb(0, 18, 90),skyblue);
    background-size: 100%;
    z-index: 0;

}
.background{
    position: absolute;
    width: 100%;
    height: 100vh;
    mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 30%);
    mask-mode: match-source;
    z-index: -1;
}

</style>
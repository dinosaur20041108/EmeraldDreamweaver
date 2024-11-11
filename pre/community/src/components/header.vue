<template>
<div class="header">
    <div class="logo"></div>
    <div class="title">
        <img src="../static/Dreamweaver.png" alt="qwq" class="icon">
    </div>
    <div class="nav-button home-button" @click="toHome"></div>
    <div class="nav-button community-button" @click="toCommunity"></div>
    <div class="nav-button my-button"></div>
</div>
</template>

<script setup>
import router from '@/router'
const toHome=()=>{
    router.push({
        path:'/home'
    })
}
const toCommunity=()=>{
    router.push({
        path:'/community'
    })
}

</script>



<style scoped>
.header{
    width: 100vw;
    height: 6vh;
    /* border: black solid 1px; */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255,255,255,0.75);
    z-index: 2;
}
.logo{
    background-image: url("../static/logo.png");
    background-repeat: no-repeat;/*使图片不管任何大小都不会重复*/
    background-size: 100%;
    width: 50px;
    height: 100%;
    background-position:center;
    transform: translate(0px,0);
}
.title{
    width: 60%;
    height: 35%;
    font-size: 30px;
    /* font-family:Carattere; */
    display: flex;
    align-items: center;
}
.nav-button{
    background-repeat: no-repeat;/*使图片不管任何大小都不会重复*/
    background-size: 100%;
    width: 120px;
    height: 100%;
    background-position:center;
}
.home-button{
    background-image: url('../static/homeButton.png');
}
.community-button{
    background-image: url('../static/communityButton.png');
}
.my-button{
    background-image: url('../static/myButton.png');
}

.icon{
    max-width: 100%;
    max-height: 100%;
}
</style>
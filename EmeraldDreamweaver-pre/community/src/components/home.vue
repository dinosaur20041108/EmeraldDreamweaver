<template>
<div class="home">

    <div class="index-container">
        <div class="logo">
            <el-image src="../src/static/whiteLogo.png" fit="contain" class="icon" />
        </div>
        <div class="title">Emerald Dreameaver</div>
        <div class="button-box">
            <div class="button" @click="toKnowledge">环保知识></div>
            <div class="button" @click="toMonitor">环保模拟器></div>
        </div>
    </div>
    <div class="panda">
        <el-image src="../src/static/panda.png" fit="contain" class="icon" />
    </div>


    <Rotation/>
</div>
</template>


<script setup>
import router from '@/router';
import Rotation from '../components/rotation.vue'


const toKnowledge=()=>{

}
const toMonitor=()=>{
    router.push({path:'/monitor'})
}

</script>

<style scoped>
.icon{
    max-width: 100%;
    max-height: 100%;
}

.home{
    width: 100%;
    height: 180vh;
    background: linear-gradient(rgb(27,113,2,0.8),rgb(255,255,255,1));
}
.index-container{
    width: 100%;
    height: 100vh;
    background: url('../static/home.png');
    /* background-attachment: fixed; */
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-mask-image: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 65%); 
    padding-top: 220px;
}

.title{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: white;
    font-size: 70px;
    line-height: 70px;
}
.title::after{
    content: '';
    display: inline-block;
    width: 100%;
    border-top: 4px solid white;
    transform: translate(0,-20px);
}

.button-box{
    width: 80%;
    height: 10%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    transform: translate(0,-0px);
}
.button{
    width: 400px;
    height: 100%;
    text-align: center;
    color: white;
    font-size: 35px;
    z-index: 5;
}

.panda{
    position: absolute;
    width: 20%;
    height: 30%;
    top: 67%;
    right: 4%;
}
.logo{
    width: 20%;
    height: 30%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

</style>

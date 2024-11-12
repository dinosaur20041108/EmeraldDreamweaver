<template>
    <div class="home">
        <div class=""></div>
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
    <Foot/>
    </template>
    
    
    <script setup>
    import router from '@/router';
    import Rotation from '../components/rotation.vue'
    import Foot from '../components/foot.vue'
    
    
    const toKnowledge=()=>{
    
    }
    const toMonitor=()=>{
        //router.push({path:'/monitor'})
        window.open("../src/build/index.html")
    }
    
    </script>
    
    <style scoped>
    .icon{
        max-width: 100%;
        max-height: 100%;
    }
    
    .home{
        width: 100%;
        height: 200vh;
        background: linear-gradient(#3A6C38,#819BAC);
        overflow: hidden;
    }
    .index-container{
        width: 100%;
        height: 100vh;
        background: url('../static/home.png');
        /* background-attachment: fixed; */
        background-repeat: no-repeat;
        background-size: cover;
        mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1) 35%);
        mask-mode: match-source;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
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
        right: 5vh;
        bottom: 5vh;
    }
    .logo{
        width: 20%;
        height: 30%;
        max-height: 200px;
        padding: auto;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
    
    </style>
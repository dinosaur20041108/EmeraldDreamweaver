<template>
    <div class="home">
        
        <div class="index-container">
            <img src="../static/park.jpg" style="width: 100%;height: 110vh;object-fit: cover;position: absolute;top: -10vh;left: 0;" autoplay="autoplay" loop="loop" muted="muted" z-index="-2">
            <video src="../static/park.mp4" style="width: 100%;height: 110vh;object-fit: cover;position: absolute;top: -10vh;left: 0;" autoplay="autoplay" loop="loop" muted="muted" z-index="-2"></video>
            <div class="box">
                <div class="logo">
                    <el-image src="../src/static/whitelogo.png" fit="contain" class="icon" />
                </div>
                <div class="title">Emerald&ensp;Dreameaver</div>
                <div class="button-box">
                    <div class="button" @click="toKnowledge">环保知识></div>
                    <div class="button" @click="toMonitor">环保模拟器></div>
                </div>
            </div>    
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
        router.push({
            path:'/knowledge'
        })
    }
    const toMonitor=()=>{
        //router.push({path:'/monitor'})
        window.open("../src/build/index.html")
    }
    
    </script>
    
    <style scoped>

    .icon{
        width: 100%;
        height: 100%;
    }
    .box{
        height: 50%;
        width: 100%;
        z-index: 5;
        animation: anima 1000ms ease-out 100ms backwards; 
    }
    @keyframes anima {
        0% {
        opacity:0;
        }
        100% {
        opacity:1;
        }
    }

    .home{
        width: 100%;
        height: 210vh;
        background: linear-gradient(rgb(0, 0, 0),rgb(0, 120, 44),#819BAC);
        overflow: hidden;
    }
    .index-container{
        width: 100%;
        height: 110vh;
        /*background: url('../static/home.png');*/
        /* background-attachment: fixed; */
        background-repeat: no-repeat;
        background-size: cover;
        mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 1) 30%);
        mask-mode: match-source;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    
    .title{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        color: whitesmoke;
        font-size: 70px;
        font-family: "Carattere";
        line-height: 80px;
        z-index: 5;
        /*background:  linear-gradient(to right, #F6736B,#934F91)  ; /* 设置从左到右的线性渐变 */
         /*-webkit-background-clip: text; /* 将背景裁剪到文字区域 */
         /*-webkit-text-fill-color: transparent; /* 设置文字颜色为透明 */
    }
    .title::after{
        content: '';
        display: inline-block;
        width: 100%;
        border-top: 5px solid white;
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
        font-weight: bold;
        cursor: pointer;
    }
    .button:hover{
        scale: 1.1;
    }
    
    .logo{
        width: 30%;
        height: 30%;
        max-height: 200px;
        padding: auto;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
    @font-face {
        font-family: 'Carattere';
        src: url('../static/font/Carattere-Regular.ttf') format('truetype');
    }
    @media screen and (max-width: 850px) {
        .title{
            font-size: 40px;
            line-height: 50px;
        }
        .button{
            font-size: 25px;
        }
        
    }
    
    </style>
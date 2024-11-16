<template>
    <img src="..\static\foot.png" class="footimg">
    <div class="up"><div class="protect">保护环境，就是保护我们自己的家园</div></div>
    
    <div class="footer">
        <div class="left">
            <div class="center">
                <div class="title">Emerald Dreamweaver</div>
                <div class="sub-title">
                    <div class="sub-block-half">
                        <div class="sub"><br></div>
                        <div class="sub" @click="toHome">主页</div>
                        <div class="sub"  >环保知识</div>
                        <div class="sub" @click="toCommunity">环保动态</div>
                        <div class="sub" @click="toMonitor">环保模拟器</div>
                    </div>
                    <div class="sub-block-half">
                        <div class="sub"><br></div>
                        <div class="sub" @click="toCommunity">社区</div>
                        <div class="sub" @click="toMe">我的</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mid">
            <div class="center">
                <div class="title">联系我们</div>
                <div class="sub-block">
                <br>
                湖北省·武汉市·洪山区珞喻路<br>
                武汉大学信息学部<br>
                <br>
                18192845267<br>
                2843565830@qq.com<br>
                </div>
            </div>
        </div>
        <div class="right">
        <img src="..\static\QR.png" class="QR">
        <div class="text">扫一扫，关注绿意织梦</div>
        <div class="text">copyright © 2024 Emerald Dreamweaver</div>

        </div>
    </div>
</template>
<style scoped>
.footimg{
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    object-fit: cover;
    overflow: hidden;
}
.up{
    height: 60vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.protect{

    font-size: 60px;
    color: #fff;
    font-weight: bold;
}
.footer{

    height: 40vh;
    width: 100%;
    background-color: #f5f5f5c8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    overflow: hidden;
}
.left{
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
}
.title{
    font-size: 30px;
    font-weight: bold;
}
.sub-title{
    display: flex;
    width: 100%;
    justify-content: start;
    flex-direction: row;
    justify-content: start;

}
.sub-block{
    display: flex;
    width: max-content;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    margin-top: 5px;
}
.sub-block-half{
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    margin-top: 5px;
}
.sub{
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
    cursor: pointer;
}
.sub:hover{
    scale: 1.1;
}
.mid{
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.center{
    width: max-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    
}
.right{
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.QR{
    width: 40%;

}

@media screen and (max-width: 1100px) {
    .title{
        font-size: 20px;
    }
    .sub{
        font-size: 14px;
    }
    .protect{
        font-size: 30px;
    }
    .text{
        font-size: small;
    }
}
@media screen and (max-width: 900px) {
    .text{
        display: none;
    }
    .mid{
        display: none;
    }
}
</style>


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
const toMonitor=()=>{
    router.push({
        path:'/monitor'
    })
}
const toMe=()=>{
    router.push({
        path:'/me'
    })
}

</script>
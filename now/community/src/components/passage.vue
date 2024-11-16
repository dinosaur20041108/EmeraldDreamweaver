<template>
<div class="passage" v-if="index%2==1">
    <div class="detail">
        <div class="bookname-en">{{ passage.title }}</div>
        <div class="bookname-cn">{{ passage.subtitle }}</div>
        <div class="cover">
            <div class="coverimg">
                <img :src="coverURL" alt="www" class="icon">
            </div>
        </div>
        <div class="intro">{{ passage.intro }}</div>
        <div class="detail-button">
            <img src="../static/detail.png" alt="qwq" class="icon" @click="toLink">
        </div>
    </div>
    <div class="line"></div>
    <div class="favor">
        <div class="favor-title">点赞量: {{ passage.like }}k</div>
        <div class="favor-title">收藏量: {{ passage.collect }}k</div>
        <div class="favor-title">阅读量: {{ passage.read }}k</div>
    </div>
</div>
<div class="passage" v-else>
    <div class="favor">
        <div class="favor-title">点赞量: {{ passage.like }}k</div>
        <div class="favor-title">收藏量: {{ passage.collect }}k</div>
        <div class="favor-title">阅读量: {{ passage.read }}k</div>
    </div>
    <div class="line"></div>
    <div class="detail">
        <div class="bookname-en">{{ passage.title }}</div>
        <div class="bookname-cn">{{ passage.subtitle }}</div>
        <div class="cover">
            <img :src="coverURL" alt="www" class="icon">
        </div>
        <div class="intro">{{ passage.intro }}</div>
        <div class="detail-button">
            <img src="../static/detail.png" alt="qwq" class="icon" @click="toLink">
        </div>
    </div>
</div>

</template>

<script setup>
import { defineProps,ref } from 'vue'
import knows from '../static/know'

const sortedKnows=knows
sortedKnows.sort((a,b)=>-(a.like+a.collect+a.read)+(b.like+b.collect+b.read))

const props=defineProps({
    index:Number
})
const index=props.index
const passage=sortedKnows[index-1]
const coverURL=`../src/static/know/${passage.img}`


const toLink=()=>{
    var linkURL=passage.url;
    if(passage.type=='pdf')
    {
        linkURL='../src/static/know/'+linkURL
    }
    window.open(`${linkURL}`)
}


</script>

<style scoped>
.icon{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.passage{
    width: 100%;
    height: 70vh;
    /* border: black solid 1px; */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.detail{
    width: 50%;
    height: 80%;
    border: black solid 1px;
    border-radius: 30px;
    background-color: rgb(255,255,255,0.6);
    position: relative;
    z-index: 1;
}
.bookname-en{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight:bold;
    position: absolute;
    top: 5%;
}
.bookname-cn{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: absolute;
    top: 15%;
}
.cover{
    width: 35%;
    height: 60%;
    top: 25%;
    left: 8%;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
}
.coverimg{
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
}
.intro{
    padding-top: 5px;
    width: 50%;
    height: 55%;
    position: absolute;
    top: 25%;
    right: 5%;
    font-size: 18px;
    text-align: justify;
}
.detail-button{
    width: 200px;
    height: 100px;
    position: absolute;
    bottom: 5%;
    right: 0%;
}
.detail-button:hover{
    scale: 1.1;
}
.line{
    width: 15%;
    height: 0;
    border: black solid 1px;
    z-index: 1;
}

.favor{
    width: 20%;
    height: 40%;
    border: black solid 1px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0,0,0,0.3);
    z-index: 1;
}
.favor-title{
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255,255,255,0.8);
    font-size: 26px;
}
.favor-number{
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}

@media screen and (max-width:1200px){
    .bookname-cn{
        font-size: 15px;
    }
    .bookname-en{
        font-size: 15px;
    }
    .passage{
        width: 100%;
        height: 60vh;
        /* border: black solid 1px; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .favor{
        width: 25%;
        height: 30%;
        border: black solid 1px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(0,0,0,0.3);
    }
    .intro{
        width: 50%;
        height: 55%;
        position: absolute;
        top: 25%;
        right: 3%;
        font-size: 15px;
        overflow: hidden;
    }
    .favor-title{
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
    .detail-button{
    width: 150px;
    height: 75px;
    position: absolute;
    bottom: 3%;
    right: 3%;
}
}

</style>
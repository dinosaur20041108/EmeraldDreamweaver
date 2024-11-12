<template>
<div class="news-container">
    <div class="img-container">
        <div class="news-img" :style="{'width':imgWidth} ">
            <el-image :src="url1" fit="fill" class="icon"/>
            <div class="name" :style="{'left':titleLeft}">{{ issue.name }}</div>
            <div class="title" :style="{'left':titleLeft}">{{ issue.title }}</div>
        </div>
        <div class="panda" v-if="isPandaShow">
            <el-image :src="url2" fit="contain" class="icon"/>
        </div>
    </div>
    <div class="data-container">
        <div v-for="i in 4" class="data">
            <div class="number">{{ issue.number[i-1] }}</div>
            <div class="unit">{{ issue.unit[i-1] }}</div>
            <div class="topic">{{ issue.topic[i-1] }}</div>
        </div>
    </div>
</div>
</template>

<script setup>

import news from '@/static/news';
import { defineProps , ref , onMounted } from 'vue';

const props=defineProps({
    index:Number
})

const index=props.index-1
const issue=news[index]
const url1='../src/static/news'+issue.img
const url2='../src/static/news'+issue.panda


const isPandaShow=ref(true)
const imgWidth=ref('')
const titleLeft=ref('')

const getWindowInfo = () => {
	const windowInfo = {
		width: window.innerWidth,
		hight: window.innerHeight
	}
    // console.log(windowInfo)
    if(windowInfo.width<=1000)
    {
        isPandaShow.value=false
        imgWidth.value=`800px`
        titleLeft.value='140px'
    }
    else
    {
        isPandaShow.value=true
        imgWidth.value=`60%`
        titleLeft.value='8%'
    }
    // console.log(imgWidth)
};
const debounce = (fn, delay) => {
	let timer;
	return function() {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn();
		}, delay);
	}
};
const cancalDebounce = debounce(getWindowInfo, 500);
window.addEventListener('resize', cancalDebounce);


onMounted(()=>{
    getWindowInfo()
})

</script>

<style scoped>
.icon{
    max-width: 100%;
    max-height: 100%;
}
.news-container{
    width: 100%;
    height: 100%;
    position: relative;
    transform: translate(2px,0);
    padding-top: 3vh;
}
.img-container{
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-around;
    position: relative;
}
.news-img{
    width: 60%;
    height: 100%;
}
.panda{
    width: 25%;
    height: 100%;
}
.data-container{
    position: absolute;
    bottom: 5%;
    left: 5%;
    width: 90%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transform: translate(0,-30px);
}
.data{
    position: relative;
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    background-color: rgb(0,0,0,0);
}
.number{
    position: absolute;
    font-size: 80px;
    line-height: 80px;
    width: 70%;
    height: 55%;
    display: flex;
    justify-content:end;
    align-items: end;
    font-weight: bold;
    color:rgb(35, 0, 0);

    /* transform: translate(-32px,0); */
}
.unit{
    position:absolute;
    font-size: 30px;
    line-height: 30px;
    width: 30%;
    height: 55%;
    left: 80%;
    display: flex;
    /* justify-content: center; */
    align-items:end;
    color:rgb(35, 0, 0);
    /* transform: translate(-32px,0); */
}
.topic{
    position: absolute;
    width: 100%;
    height: 40%;
    top: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color:white;
}
.title{
    position: absolute;
    bottom: 20%;
    left: 8%;
    font-size: 30px;
    color: white;
    font-weight: bold;
}
.name{
    position: absolute;
    bottom: 30%;
    left: 8%;
    font-size: 30px;
    color: white;
    font-weight: bold;
    transform: translate(-28px,0);
}
.name::before{
    content: 'w';
    color: yellow;
    font-size: 30px;
    background-color: yellow;
    z-index: 5;
}

@media screen and (max-width: 1280px) {
    .number{
        position: absolute;
        font-size: 60px;
        line-height: 60px;
        width: 70%;
        height: 55%;
        display: flex;
        justify-content:end;
        align-items: end;
        font-weight: bold;
        /* transform: translate(-32px,0); */
    }
    .unit{
        position:absolute;
        font-size: 22px;
        line-height: 22px;
        width: 30%;
        height: 55%;
        left: 80%;
        display: flex;
        /* justify-content: center; */
        /* align-items:end; */
        /* transform: translate(-32px,0); */
    }
    .topic{
        position: absolute;
        width: 100%;
        height: 40%;
        top: 55%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
    }
}

</style>
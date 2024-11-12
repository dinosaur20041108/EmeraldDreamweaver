<template>
    <div class="note">
        <div class="leaf"></div>
        <div class="user-container">
            <div class="avatar">
                <img :src="imgURL" alt="qwq" class="round_icon"/>
            </div>
            <div class="username">{{ note.username }}</div>
        </div>
        <div class="title">
        <div class="ellipseTitle">{{ note.title }}</div>
        </div>
        <div class="notetime">{{ note.date }}</div>
        <div class="text">
            <div class="ellipseText">{{ note.text }}</div>
        </div>
        <div class="button-container">
            <div class="like"></div>
            <div class="collect"></div>
            <div class="detail" @click="toDetail"></div>
        </div>
    </div>
</template>

<script setup>
import {ref,defineProps} from 'vue'
import notes from '@/static/ldd.js'
import { useRouter } from 'vue-router';

const props=defineProps({
    index:Number
})

const note=notes[props.index-1]
// console.log(note)
const imgURL='../src/static/'+note.avatarURL

const router=useRouter()
const toDetail=()=>{
    router.push({path:'/note',query:{index:`${props.index}`}})
}


</script>

<style scoped>
.icon{
    max-width: 100%;
    max-height: 100%;
}
.note{
    width: 300px;
    height: 320px;
    background-color: rgb(255,255,255,0.7);
    border-radius: 15%;
    position: relative;
    flex-shrink: 0;
    margin: 30px;
}

.leaf{
    background-image: url("../static/leaf.png");
    background-attachment: fixed;/*背景图片不会固定不会因页面滚动而重复*/
    background-repeat: no-repeat;/*使图片不管任何大小都不会重复*/
    background-size: 100%;/*改变背景图的长和宽*/
    width: 15%;
    height: 15%;
    position: absolute;
    top: -6%;
    left: -2%;
    transform:rotate(0deg);
}

.user-container{
    height: 25%;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.avatar{
    width: 30%;
    height: 80%;
    transform:rotate(0deg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.username{
    width: 60%;
    height: 50%;
    position: relative;
    top: -7%;
    left: -3%;
    display: flex;
    align-items: center;
}

.title{
    height: 8%;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: bold;
}
.notetime{
    height: 6%;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 12px;
}
.text{
    height: 120px;
    width: 240px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    /* align-items: center; */
}

.button-container{
    height: 25%;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content:space-between;
}
.like{
    background-image: url("../static/like.png");
    background-attachment: fixed;/*背景图片不会固定不会因页面滚动而重复*/
    background-repeat: no-repeat;/*使图片不管任何大小都不会重复*/
    background-size: contain;/*改变背景图的长和宽*/
    background-position: center;
    width: 20%;
    height: 100%;
    transform:rotate(0deg);
}
.like:hover{
    scale: 1.2;
}
.collect{
    background-image: url("../static/collect.png");
    background-attachment: fixed;/*背景图片不会固定不会因页面滚动而重复*/
    background-repeat: no-repeat;/*使图片不管任何大小都不会重复*/
    background-size: contain;/*改变背景图的长和宽*/
    background-position: center;
    width: 10%;
    height: 30%;
    transform:rotate(0deg);
}
.collect:hover{
    scale: 1.2;
}
.detail{
    background-image: url("../static/detail.png");
    background-attachment: fixed;/*背景图片不会固定不会因页面滚动而重复*/
    background-repeat: no-repeat;/*使图片不管任何大小都不会重复*/
    background-size: contain;/*改变背景图的长和宽*/
    background-position: center;
    width: 75%;
    height: 60%;
    transform:rotate(0deg);
    transform: translateX(30px);
}
.detail:hover{
    scale: 1.1;
}

.ellipseTitle{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ellipseText{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
}

.round_icon{
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

</style>
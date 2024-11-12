<template>
<div class="note-container">
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
        <div class="blank"></div>
        <div class="button-container">
            <div class="like"></div>
            <div class="collect"></div>
            <div class="comment">
                <img src="../static/comment.png" alt="www" class="icon"/>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import notes from '@/static/ldd.js'

const route=useRoute()
let index=route.query.index
const note=notes[index-1]
// console.log(note)
const imgURL='../src/static/'+note.avatarURL

</script>

<style scoped>
.note-container{
    position:absolute;
    width: 100vw;
    height: 100vh;
    /* border: black solid 1px; */
    display: flex;
    justify-content:center;
    align-items: center;
    background: linear-gradient(#ccdadb, #6e9caf);
}
.icon{
    max-width: 100%;
    max-height: 100%;
}
.note{
    width: 80%;
    /* height:80vh; */
    border-radius: 40px;
    position: relative;
    flex-shrink: 0;
    background-color: rgb(255,255,255,0.4);
}

.leaf{
    background-image: url("../static/leaf.png");
    background-attachment: fixed;/*背景图片不会固定不会因页面滚动而重复*/
    background-repeat: no-repeat;/*使图片不管任何大小都不会重复*/
    background-size: 100%;/*改变背景图的长和宽*/
    width:174px;
    height: 150px;
    position: absolute;
    top: -100px;
    left: 42%;
    transform:rotate(15deg);
}

.user-container{
    height: 80px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    align-items: center;
    /* justify-content:space-around; */
    transform: translate(-25px,0);
}

.avatar{
    width: 100px;
    height: 80%;
    transform:rotate(0deg);
    display: flex;
    justify-content: center;
    align-items: center;
}

.username{
    width: 86%;
    height: 50%;
    position: relative;
    display: flex;
    align-items: center;
}

.title{
    height: 60px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    align-items: center;
}
.notetime{
    height: 25px;
    width: 84%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 12px;
}
.text{
    height: 54%;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    /* align-items: center; */
}

.button-container{
    height: 86px;
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
    width: 55px;
    height: 78px;
    transform:rotate(0deg);
}
.collect{
    background-image: url("../static/collect.png");
    background-attachment: fixed;/*背景图片不会固定不会因页面滚动而重复*/
    background-repeat: no-repeat;/*使图片不管任何大小都不会重复*/
    background-size: contain;/*改变背景图的长和宽*/
    background-position: center;
    width: 55px;
    height: 24px;
    transform:rotate(0deg);
}
.comment{
    width: 84%;
    height: 70%;
    display: flex;
    justify-content: end;
    align-items: center;
}

/* .ellipseTitle{
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
} */

.round_icon{
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.blank{
    width: 100%;
    height: 50px;
}
</style>
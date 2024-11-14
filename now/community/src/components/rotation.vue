<template>
<!-- <div class=blank></div> -->
<div class="block text-center rotation-container">
    <!-- <span class="demonstration">
      Switch when indicator is hovered (default)
    </span> -->
    <el-carousel height="100vh" :autoplay="true">
      <el-carousel-item v-for="index in 2" :key="index">
        <!-- <h3 class="small justify-center" text="2xl">{{ index }}</h3> -->
        <News :index="index"/>
      </el-carousel-item> 
    </el-carousel>
  </div>
</template>

<script setup>
import News from '@/components/news.vue'



</script>

<style scoped>
.rotation-container{
    width: 100vw;
    height: 80vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    /* background: linear-gradient(rgb(27,113,2,0.8),rgb(255,255,255,1)); */
    transform: translate(0,-80px);
}
.blank{
    width: 100%;
    height: 6vh;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

/* .el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>
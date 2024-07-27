<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import CustomNavbar from './components/CustomNavbar.vue';
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue';
import Skeleton from './components/Skeleton.vue';

import { getHomeBannerApi,getHomeCategoryApi,getHomeHotApi } from '@/services/home';
import { ref } from 'vue';
import type { BannerItem,CategoryItem,HotItem} from '@/types/home';
import { useGuessList } from '@/composables';

// 轮播图数据
const bannerList = ref<BannerItem[]>([]);
const getHomeBannerData=async()=>{
  const res=await getHomeBannerApi();
  bannerList.value=res.result;
}
// 分类数据
const categoryList=ref<CategoryItem[]>([]);
const getHomeCategoryData=async()=>{
  const res=await getHomeCategoryApi();
  categoryList.value=res.result;
}
//热门推荐数据
const hotList=ref<HotItem[]>([]);
const getHomeHotData=async()=>{
  const res=await getHomeHotApi();
  hotList.value=res.result;
}
const isLoading=ref(false);
onLoad( async()=>{
  isLoading.value=true;
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
       getHomeHotData()
  ])  
  isLoading.value=false;
})

// 猜你喜欢分页加载
const { guessRef,onScrolltolower } = useGuessList()

//自定义下拉刷新被触发
const isRefresherTriggered=ref(false);
const onRefresherrefresh= async()=>{
  isRefresherTriggered.value=true;
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData();
  // 重新获取数据
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getMore()
  ])
  isRefresherTriggered.value=false;
}
</script>

<template>
  <!-- 顶部导航搜索区 -->
  <CustomNavbar/>
  <!-- 骨架屏 -->
  <Skeleton v-if="isLoading"/>
  <template v-else>
    <!-- 滚动容器 -->
    <scroll-view refresher-enabled @refresherrefresh="onRefresherrefresh" :refresher-triggered="isRefresherTriggered" @scrolltolower="onScrolltolower" class="scroll-view" scroll-y>
      <!-- 轮播图组建 -->
      <XtxSwiper :list="bannerList"/>
      <!-- 首页分类 -->
      <CategoryPanel :list="categoryList"/>
      <!-- 推荐专区 -->
      <HotPanel :list="hotList"/>
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef"/>
    </scroll-view>
  </template>
  
</template>

<style lang="scss">
page{
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view{
  flex: 1;
}
</style>

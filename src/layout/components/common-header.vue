<script setup lang="ts">

export interface HeaderConfig {
  /**
   * 页面导航标题
   */
  navigationBarTitleText?: string;
  /**
   * 导航栏背景色
   */
  navigationBarBackgroundColor?: string;
  /**
   * 导航栏标题颜色和状态栏前景颜色
   */
  navigationBarTextStyle?: string;
}

/**
 * 所有路由地址列表
 */
export type pagePathList = string[];

// todo navigationBarBackgroundColor 和 navigationBarTextStyle 还没写入动态样式
interface HeaderProps {

  list: pagePathList;
  /**
   * 当前路由地址
   */
  currentPagePath?: string;
  /**
   * 页面导航标题
   */
  navigationBarTitleText?: string;
  /**
   * 导航栏背景色
   */
  navigationBarBackgroundColor?: string;
  /**
   * 导航栏标题颜色和状态栏前景颜色
   */
  navigationBarTextStyle?: string;
}

defineProps<HeaderProps>();

</script>

<template>
  <div class="common-header">
    <template
      v-for="(item, index) in list"
      :key="index"
    >
      <div
        v-show="currentPagePath === item"
        class="common-header-body"
      >
        <div class="common-header-title">
          {{ navigationBarTitleText }}
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.common-header {
  width: 100%;
  height: 88rem;
  overflow: hidden;

  &-body {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 88rem;
    padding: 14rem 6rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    color: #fff;
    background-color: #000;
    transition-property: all;
  }

  &-title {
    position: absolute;
    left: 70px;
    right: 70px;
    min-width: 0;
    font-weight: 700;
    font-size: 32rem;
    line-height: 60rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>

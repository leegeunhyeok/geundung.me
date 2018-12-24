<template>
  <div class="home view">
    <div class="gradient-area">
      <gradient/>
    </div>
    <div class="content-wrap">
      <div class="content">
        Hello! A
      </div>
      <div class="content">
        Hello! B
      </div>
    </div>
  </div>
</template>

<script>
import Gradient from '@/components/Gradient'

export default {
  name: 'home',
  components: {
    Gradient
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';

.home {
  position: relative;
}

.content-wrap {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding-top: 60px;
  z-index: 10;

  @media only screen and (min-width: 321px) {
    padding-top: 300px;
  }

  @media only screen and (min-width: 768px) {
    padding-top: 360px;
  }

  @media only screen  and (min-width : 1224px) {
    padding-top: 440px;
  }

  .content {
    height: 500px;
    background-color: #fff;
    margin-bottom: 50px;
  }
}
</style>

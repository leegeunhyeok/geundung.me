<template>
  <div class="home">
    <div class="gradient-area">
      <gradient/>
    </div>
    <div class="content-wrap">
      <div class="content">
        Hello!
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
.gradient-area {
  position: absolute;
  top: 60px;
  left: 0px;
  width: 100%;

  @media only screen and (min-width: 321px) {
    height: 300px;
  }

  @media only screen and (min-width: 768px) {
    height: 360px;
  }

  @media only screen  and (min-width : 1224px) {
    height: 440px;
  }
}

.content-wrap {
  box-sizing: border-box;

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
    height: 1000px;
    background-color: #fff;
  }
}
</style>

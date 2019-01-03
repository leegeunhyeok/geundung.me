<template>
  <div id="app">
    <app-header/>
    <router-view v-show="$store.state.loaded"/>
    <app-footer/>
    <app-loader v-if="!$store.state.loaded"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-loader': Loader
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';

@font-face {
  font-family: 'NanumSquareRound';
  src:url('assets/fonts/NanumSquareRoundR.eot');
  src:url('assets/fonts/NanumSquareRoundR.eot#iefix') format('embedded-opentype'),
  url('assets/fonts/NanumSquareRoundR.woff') format('woff'),
  url('assets/fonts/NanumSquareRoundR.ttf') format('truetype');
  src:local(¡Ø), url('assets/fonts/NanumSquareRoundR.woff') format('woff');
}

@font-face {
  font-family: 'Comfortaa';
  src:url('assets/fonts/Comfortaa_Regular.eot');
  src:url('assets/fonts/Comfortaa_Regular.eot#iefix') format('embedded-opentype'),
  url('assets/fonts/Comfortaa_Regular.woff') format('woff'),
  url('assets/fonts/Comfortaa_Regular.ttf') format('truetype');
  src:local(¡Ø), url('assets/fonts/Comfortaa_Regular.woff') format('woff');
}

#app {
  font-family: 'Avenir', sans-serif, Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html, body, #app {
  height: 100%;
}

// fade 트랜지션
.fade-enter-active, .fade-leave-active {
  transition: .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

// fade + height 트랜지션
.fade-height-enter-active, .fade-height-leave-active {
  max-height: 500px;
  transition: .8s;
}

.fade-height-enter, .fade-height-leave-to {
  max-height: 0;
  opacity: 0;
}

</style>

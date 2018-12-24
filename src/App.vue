<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body, #app, .view {
  height: 100%;
}

</style>

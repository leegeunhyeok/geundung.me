<template>
  <div class="home view">
    <div class="gradient-area">
      <div class="main-title-area">
        <div class="main-title">Hello, world!</div>
      </div>
      <gradient/>
    </div>
    <div class="content-wrap">
      <div class="content">
        <div class="about slide-right-left">
          <div class="content-title">About me</div>
          sample
        </div>
      </div>
      <div class="content">
        <div class="projects slide-left-right">
          <div class="content-title">Projects</div>
          sample
        </div>
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
  },
  methods: {
    scrollHandler () {
      console.log(window.pageYOffset || document.documentElement.scrollTop)
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/common.scss';

.home {
  position: relative;
}

.main-title-area {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 27.5rem);
  -webkit-transform: translate(-50%, 27.5rem);
  -moz-transform: translate(-50%, 27.5rem);
  color: #fff;
  font-family: 'Comfortaa', 'Avenir', sans-serif, Tahoma;
  font-size: 1.8rem;

  @media only screen and (min-width: 321px) {
    top: 10.3125rem;
  }

  @media only screen and (min-width: 768px) {
    top: 12.1875rem;
  }

  @media only screen and (min-width : 1224px) {
    top: 14.6875rem;
  }

  animation: slide-up 1s ease forwards;
  -webkit-animation: slide-up 1s ease forwards;
  -moz-animation: slide-up 1s ease forwards;
}

@-webkit-keyframes slide-up {
  100% {
    -webkit-transform: translate(-50%, 0);
  }
}

@-moz-keyframes slide-up {
  100% {
    -moz-transform: translate(-50%, 0);
  }
}

@keyframes slide-up {
  100% {
    transform: translate(-50%, 0);
  }
}

.content-wrap {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  z-index: 5;
  margin-bottom: 100px;
  transition: margin-top .3s;

  @media only screen and (min-width: 321px) {
    margin-top: 300px;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 360px;
  }

  @media only screen  and (min-width : 1224px) {
    margin-top: 440px;
  }

  .content {
    padding: 10px;
    background-color: #fff;
    overflow-x: hidden;

    .content-title {

      @media only screen and (min-width: 321px) {
        font-size: 1.5rem;
      }

      @media only screen and (min-width: 768px) {
        font-size: 1.7rem;
      }

      @media only screen  and (min-width : 1224px) {
        font-size: 1.8rem;
      }

      font-weight: bold;
      font-family: 'Comfortaa', 'Avenir', sans-serif, Tahoma;
      color: #2c3e50;
      transition: $font-transition;
    }

    .about {
      height: 400px;
    }

    .projects {
      height: 400px;
    }
  }
}

.slide-right-left {
  opacity: 0;
  -webkit-animation: slide-right-left 1.2s 1s ease forwards;
  -moz-animation: slide-right-left 1.2s 1s ease forwards;
  animation: slide-right-left 1.2s 1s ease forwards;
}

.slide-left-right {
  opacity: 0;
  -webkit-animation: slide-left-right 1.2s 1s ease forwards;
  -moz-animation: slide-left-right 1.2s 1s ease forwards;
  animation: slide-left-right 1.2s 1s ease forwards;
}

@keyframes slide-right-left {
  0% {
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes slide-left-right {
  0% {
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>

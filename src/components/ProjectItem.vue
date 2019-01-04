<template>
  <figure class="project-item" @mouseover="hover = true" @mouseout="hover = false">
    <img :src="'/assets/' + data.thumbnail">
    <transition name="fade" mode="out-in">
      <div class="mask" v-if="hover">
        <div class="text">{{ data.description }}</div>
        <button @click="showDetail">
          <font-awesome-icon :icon="['fas', 'plus']"/>
        </button>
      </div>
    </transition>
  </figure>
</template>

<script>
export default {
  name: 'project-item',
  props: ['data', 'index'],
  data () {
    return {
      hover: false
    }
  },
  methods: {
    showDetail () {
      this.$router.push({ path: `/project/${this.index}` })
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/common.scss";

.project-item {
  position: relative;
  display: inline-block;
  margin: 10px 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  transition: .3s;

  img {
    width: 100%;
    border-radius: 10px;
  }

  figcaption {
    margin-top: 5px;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .5);
    text-align: center;
    font-size: 1.4rem;
    color: #fff;

    .text {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding: 0 30px;
      box-sizing: border-box;
    }

    button {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
      outline: none;
      border: none;
      background-color: #1b5eab;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
      transition: .3s;

      &::before {
        content: "더 보기";
        pointer-events: none;
        position: absolute;
        top: 10px;
        right: 60px;
        opacity: 0;
        padding: 5px 10px;
        background-color: #2276d6;
        width: 50px;
        border-radius: 5px;
        transform: translateX(-100px);
        transition: .3s;
      }

      &:hover {
        background-color: #2276d6;

        &::before {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
  }
}

</style>

<template>
  <div class="project-item">
    <div class="project-thumbnail" @mouseover="hover = true" @mouseout="hover = false">
      <img :src="'/assets/' + data.thumbnail">
      <transition name="fade" mode="out-in">
        <div class="mask" v-if="hover" @click="showDetail">
          <div class="text">{{ data.description }}</div>
        </div>
      </transition>
    </div>
  </div>
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

.project-item {
  margin: 20px 0;

  @media only screen and (min-width: 320px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: 45%;
  }

  @media only screen and (min-width : 1224px) {
    width: 30%;
  }

  .project-thumbnail {
    cursor: pointer;
    position: relative;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
    height: 350px;
    overflow: hidden;
    text-align: center;

    @media only screen and (min-width: 320px) {
      flex-direction: column;
    }

    @media only screen and (min-width: 768px), (min-width : 1224px) {
      flex-direction: row;
      justify-content: space-around;
    }

    img {
      width: auto;
      height: 100%;
      margin: auto;
    }

    .mask {
      display: table;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      color: #fff;
      font-size: 1.4rem;
      text-align: center;
      padding: 20px;
      box-sizing: border-box;

      .text {
        display: table-cell;
        vertical-align: middle;
      }
    }
  }

  .project-detail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 9998;
  }
}

</style>

<template>
  <transition name="project" mode="out-in">
    <div class="project">
      <h2>Project! {{ id }}</h2>
      test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>
      test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>
      test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>
      test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>
      test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>
      test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>
      test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      id: 0
    }
  },
  created () {
    this.id = this.$route.params.id
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/common.scss";

.project {
  position: relative;
  padding: 10px;
  padding-top: 70px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 400px;
  z-index: 5;
}

// fade 트랜지션
.project-enter-active, .project-leave-active {
  transition: 1s;
}

.project-enter, .project-leave-to {
  transform: translateY(400px);
}

</style>

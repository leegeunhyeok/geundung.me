<template>
  <figure class="project-item" @click="showDetail">
    <img src="@/assets/p1_lotto.png">
    <!-- :src="'/assets/' + data.thumbnail" -->
    <figcaption>Test</figcaption>
  </figure>
</template>

<script>
export default {
  name: 'project-item',
  props: ['data', 'index'],
  methods: {
    showDetail () {
      this.$router.push({ path: `/project/${this.index}` })
    }
  }
}
</script>

<style lang="scss">

.project-item {
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

  &:hover {
    background-color: #eee;
  }
}

</style>

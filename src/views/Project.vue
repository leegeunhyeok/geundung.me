<template>
  <div class="project">
    Project! {{ id }}
  </div>
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
}

</style>

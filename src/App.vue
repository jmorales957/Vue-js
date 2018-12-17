<template lang ="pug">
  #app
    mheader

    router-view

    mfooter
</template>

<script>

  import Mfooter from '@/components/layouts/Footer.vue'
  import Mheader from '@/components/layouts/Header.vue'

export default {
  name: 'app',
  components: { Mfooter, Mheader },
}
</script>

<style lang="scss">
  @import './src/scss/main.scss';

  .results {
    margin-top: 50px;
  }
  .is-active {
    border: 3px #23d160 solid;

  }

</style>

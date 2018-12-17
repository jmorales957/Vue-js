<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        mtrack(:track="track")
</template>

<script>
    import musicService from '@/services/track'
    import Mtrack from '@/components/Track.vue'


    export default {
        data () {
           return{
               track: {}
           }
        },
        components: { Mtrack },
        created () {
            const id = this.$route.params.id
            musicService.getById(id)
              .then( res => { this.track = res })
        }
    }
</script>

<style scoped>
.columns {
  margin: 20px;
}
</style>
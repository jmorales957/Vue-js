<template lang="pug">
  .content(v-if="track && track.album")
    p
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small [{{ track.duration_ms | ms-to-mm }}]
    p
      video(controls)
        source(:src="track.preview_url")
</template>

<script>
import {mapState} from 'vuex'
    export default {

        name: "Player",
        computed: {
            ...mapState(['track'])
        }
    }
</script>

<style scoped lang="scss">
  img  {
    width: 124px;
    border-radius: 50%;
  }
</style>
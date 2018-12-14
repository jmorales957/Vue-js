<template lang ="pug">
  #app
    mheader

    mloader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
          type="text",
          placeholder="Buscar canciones",
          v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            mtrack(
            v-bind:track="t",
            @select="setSelectedTrack"
            :class="{ 'is-active': t.id === selectedTrack }")
    mfooter
</template>

<script>
  import musicService from '@/services/track'
  import Mfooter from '@/components/layouts/Footer.vue'
  import Mheader from '@/components/layouts/Header.vue'
  import Mtrack from '@/components/Track.vue'
  import Mloader from '@/components/shared/Loader.vue'
export default {
  name: 'app',
  components: { Mfooter, Mheader, Mtrack, Mloader },
  data () {
    return {
        searchQuery: '',
        tracks: [],
        isLoading: false,
        selectedTrack: ''
       }
  },
  methods: {
    search () {
        if (!this.searchQuery) {return}
        this.isLoading = true
        musicService.search(this.searchQuery)
            .then(res => {
                this.tracks = res.tracks.items
                this.isLoading = false
            })

    },
      setSelectedTrack (id) {
        this.selectedTrack = id
      }
  },
  computed: {
      searchMessage () {
          return `Encontrados: ${this.tracks.length}`
      }
  }
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

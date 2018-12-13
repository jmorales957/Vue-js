<template lang ="pug">
  #app
    mheader
    section.section
      nav.nav.has-shadow
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
        .columns
          .column(v-for="t in tracks")
            | {{ t.name }} - {{ t.artists[0].name}}
    mfooter
</template>

<script>
  import musicService from './services/track'
  import Mfooter from './components/layouts/Footer.vue'
  import Mheader from './components/layouts/Header.vue'

export default {
  name: 'app',
  components: { Mfooter, Mheader },
  data () {
    return {
        searchQuery: '',
        tracks: []
       }
  },
  methods: {
    search () {
        if (!this.searchQuery) {return}
        musicService.search(this.searchQuery)
            .then(res => {
                this.tracks = res.tracks.items
            })

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

</style>

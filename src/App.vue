<template lang ="pug">
  #app
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
</template>

<script>
  import musicService from './services/track'

export default {
  name: 'app',
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

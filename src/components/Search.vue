<template lang ="pug">
  main
    transition(name="move")
      m-notification(v-show="showNotification"  :isSuccess="showFind")
        p(slot="body" v-show="!showFind") No se encontraron resultados
        p(slot="body" v-show="showFind") {{ searchMessage }}
    transition(name="move")
      mloader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
          type="text",
          placeholder="Buscar canciones",
          v-model="searchQuery",
          @keyup.enter="search"
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
            v-blur="t.preview_url",
            :track="t",
            @select="setSelectedTrack",
            :class="{ 'is-active': t.id === selectedTrack }")

</template>

<script>
    import musicService from '@/services/track'
    import Mtrack from '@/components/Track.vue'
    import Mloader from '@/components/shared/Loader.vue'
    import MNotification from '@/components/shared/Notification.vue'
    export default {
        name: 'app',
        components: { Mtrack, Mloader, MNotification },
        data () {
            return {
                searchQuery: '',
                tracks: [],
                isLoading: false,
                selectedTrack: '',
                showNotification: false,
                showFind: false
            }
        },
        methods: {
            search () {
                if (!this.searchQuery) {return}
                this.isLoading = true
                musicService.search(this.searchQuery)
                .then(res => {
                    if( res.tracks.total > 0){
                        this.showFind = true
                    }
                    this.showNotification = true
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
        },
        watch: {
            showNotification () {
                if(this.showNotification) {
                    setTimeout(() => {
                        this.showNotification = false
                        this.showFind = false
                    },3000)
                }
            }
        }
    }
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  }
  .is-active {
    border: 3px #23d160 solid;

  }

</style>

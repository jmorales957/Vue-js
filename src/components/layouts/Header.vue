<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container
          .nav-left
            .nav-item
              strong Music By JP
          .nav-right.nav-menu
            router-link.nav-item(to="/") Buscar
            router-link.nav-item(to="about") Nosotros
    .hero-body
      .container.has-text-centered
        h1 Musica
        h1.subtitle Canciones que estan buenisismas
        mplayer
</template>

<script>
  import Mplayer from '@/components/Player'
    export default {
        name: "Header",
        components: { Mplayer}
    }
</script>

<style scoped>

</style>
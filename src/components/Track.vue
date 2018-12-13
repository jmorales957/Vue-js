<template lang="pug">
  div
    h1 Esto es un componente hijo
    track-detail

</template>

<script>
  import TrackDetail from './TrackDetail'
    export default {
        name: "Track",
        components: {TrackDetail},
        comments: {
            TrackDetail
        }
    }
</script>

<style scoped>

</style>
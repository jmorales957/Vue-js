<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(:class="[isSuccess ? 'is-success' : 'is-danger']")
          slot(name="body") ALgo anduvo mal
</template>

<script>
    export default {
        props: ['isSuccess'],
        name: "Notification"
    }
</script>

<style scoped lang="scss">
.notification {
  margin: 10px;
  border: 5px black solid;
}
</style>
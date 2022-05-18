<template>
  <v-container grid-list-xs> </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      search: null,
    }
  },
  mounted() {
    this.search = decodeURIComponent(this.$route.params)
    console.log(decodeURIComponent(this.$route.params))
  },
}
</script>

<style scoped>
</style>
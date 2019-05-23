<template>
  <v-app id='app'>
    <core-toolbar />
    <core-view />
    <core-footer />
  </v-app>
</template>

<script>
export default {
  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreView: () => import('@/components/core/View')
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
  @import url("./assets/css/colors.css");
</style>


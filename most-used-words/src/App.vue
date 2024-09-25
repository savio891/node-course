<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary">
        <v-toolbar-title>Most Used Words</v-toolbar-title>
      </v-app-bar>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from "./components/HomePage.vue"

export default {
  name: 'App',

  components: {
    HomePage
  },

  data: () => ({
    //
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

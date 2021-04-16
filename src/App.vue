<template>
  <!--app.vue-->
  <div id="app">
    <Header />
    <JsonGenerator />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import JsonGenerator from './components/JsonGenerator.vue'

export default {
  name: 'App',
  components: {
    Header,
    JsonGenerator
  }
}
</script>

<style lang="scss">
@import './styles/main';
</style>

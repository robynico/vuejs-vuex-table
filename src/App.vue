<template>
  <div id="app">
    <menu></menu>
    <table-component></table-component>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Table from './components/Table'

export default {
  components: {
    'table-component': Table,
    Menu
  }
}
</script>

<style>
html {
}

body {
}
</style>

<template>
<h1>Select Columns :</h1>
<ul>
  <li
    v-for="group in groups"
    v-on:click="toggleGroup(group)">
    {{group.key}}
  </li>
</ul>
</template>

<script>
import { toggleGroup } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      groups: ({ data }) => data.groups
    },
    actions: {
      toggleGroup
    }
  },
  methods: {
    toggleGroup: function (group) {
      this.toggleGroup(group)
    }
  }
}
</script>

<style scoped>
li {
   cursor: pointer;
}
</style>

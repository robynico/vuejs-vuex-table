<template>
<h1>Table :</h1>
<table>
    <thead>
      <tr>
        <th>N°</th>
        <th v-for="field in fields">
          {{field}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(i, item) in items">
        <td>{{i}}</td>
        <td v-for="field in fields">
          {{item[field]}}
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { loadData } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      items: ({ data }) => data.items,
      groups: ({ data }) => data.groups
    },
    actions: {
      loadData
    }
  },
  created: function () {
    this.loadData()
  },
  computed: {
    fields: function () {
      let fields = []
      this.groups.filter(item => item.selected === true).forEach(item => { fields = fields.concat(item.fields) })
      return fields
    }
  }
}
</script>

<style>
</style>

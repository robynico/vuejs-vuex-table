
import {
    LOAD_DATA,
    TOGGLE_GROUP
} from './mutation-type'

const state = {
  groups: [
    {
      key: 'Columns 1 to 10',
      selected: true,
      fields: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    {
      key: 'Columns 11 to 20',
      selected: false,
      fields: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    },
    {
      key: 'Columns 21 to 30',
      selected: false,
      fields: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
    }
  ],
  items: []
}

const mutations = {
  [LOAD_DATA] (state) {
    let data = []
    for (let i = 0; i < 100; i++) {
      let set = []
      for (let j = 0; j < 100; j++) {
        set[j] = 'C' + i + '-' + j
      }
      data.push(set)
    }
    state.items = data
  },
  [TOGGLE_GROUP] (state, group) {
    let find = state.groups.find(item => item.key === group.key)
    if (find !== undefined) {
      find.selected = !find.selected
    }
  }
}

export default {
  state,
  mutations
}

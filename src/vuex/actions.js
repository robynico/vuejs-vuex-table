import * as types from './mutation-type'

export const loadData = ({dispatch, state}) => {
  dispatch(types.LOAD_DATA)
}

export const toggleGroup = ({dispatch, state}, group) => {
  dispatch(types.TOGGLE_GROUP, group)
}

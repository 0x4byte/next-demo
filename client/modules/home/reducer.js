import { createAction, handleActions } from 'redux-actions'

export const add = createAction('home/add')

const initStates = {
  count: 0
}

export default handleActions(
  {
    [add]: state => {
      return { count: state.count + 1 }
    }
  },
  initStates
)

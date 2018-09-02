import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import reducer from './reducers'

const composeEnhancers = composeWithDevTools({})

export default () =>
  createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware))
  )

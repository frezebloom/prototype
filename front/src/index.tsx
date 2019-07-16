import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createHashHistory } from 'history'

import App from './App';
import configureStore from './store/configureStore'

const history = createHashHistory()

const initialState = window.initialReduxState
const store = configureStore(history, initialState)

ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'))

import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Store } from 'redux'
import { History } from 'history'

import Routes from './routes/routes'
import { ApplicationState } from './store'

import Header from './components/Header'

import "./styles/app.scss"; 

interface AppProps {
  store: Store<ApplicationState>
  history: History
}

const App: React.FC<AppProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header title=""/>
        <Routes />
      </ConnectedRouter>
    </Provider>
  )
}

export default App

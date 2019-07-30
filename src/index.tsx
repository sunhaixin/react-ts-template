import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Index from '@view/index'
import { Error } from '@view/LazyComponent'

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/" component={Index} />
        <Route component={Error} />
      </Switch>
    )
  }
}

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)

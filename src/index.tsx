import 'core-js'
import ReactDOM from 'react-dom'
import Home from '@/pages/home'

const App = () => {
  ReactDOM.render(<Home />, document.getElementById('root'))
}

App()

if ((module as any).hot) {
  ;(module as any).hot.accept()
}

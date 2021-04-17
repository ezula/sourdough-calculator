import './App.css'

import { 
  Navbar,
  Sourdough
} from './components'

import { 
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

export default function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Sourdough />
        </Route>
        <Route path='/other'>
          <div>Other</div>
        </Route>
        <Route path='/about'>
          <div>About</div>
        </Route>
        <Route path='*'>
          <div>404</div>
        </Route>
      </Switch>
    </Router>
    
  )
}

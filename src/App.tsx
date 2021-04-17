import './App.css'

import { 
  Navbar,
  Sourdough,
  Contact,
  NotFound,
  Footer
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
          <Contact />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>

      <Footer />

    </Router>
    
  )
}

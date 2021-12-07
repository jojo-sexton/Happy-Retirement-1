import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import { Route } from 'react-router'
import Users from './Users'
import Home from './main/Home'
import Lifestyle from './main/Lifestyle'
import Savings from './main/Savings'
import Contribution from './main/Contribution'
import Roi from './main/Roi'
import Result from './main/Result'

function App () {
  cacheUser(useAuth0)

  return (
    <div className='app'>
      <Route path='/lifestyle' component={Lifestyle} />
      <Route path='/savings' component={Savings} />
      <Route path='/contribution' component={Contribution} />
      <Route path='/roi' component={Roi} />
      <Route path='/result' component={Result} />
      <Route path='/home' component={Home} />
      <Route path='/register' component={Registration} />
      <Route exact path='/' component={Nav} />
      <Route exact path='/' component={Users} />
      <Route exact path='/' component={PingRoutes} />
    </div>
  )
}

export default App

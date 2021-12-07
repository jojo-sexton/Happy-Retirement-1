// ADD AUTH0 LATER
// import { useAuth0 } from '@auth0/auth0-react'
// import { cacheUser } from '../auth0-utils'
// import Nav from './Nav'
// import PingRoutes from './PingRoutes'
// import Registration from './Registration'
// import Users from './Users'

// MVP IMPORTS
import { Route } from 'react-router'
import React, { useState } from 'react'
import Home from './main/Home'
import Lifestyle from './main/Lifestyle'
import Savings from './main/Savings'
import Contribution from './main/Contribution'
import Roi from './main/Roi'
import Result from './main/Result'

function App () {
  // cacheUser(useAuth0)
  const initPlan = {
    lifestyle: NaN,
    savings: NaN,
    contribution: NaN,
    interest: NaN,
    tax: NaN,
    ageNow: NaN
  }

  const [plan, setPlan] = useState({ initPlan })

  const addLifestyle = (lifestyle) => {
    setPlan({ ...plan, lifestyle })
  }

  return (
    <div className='app'>
      <Route path='/lifestyle' component={Lifestyle} >
        <Lifestyle addLifestyle={addLifestyle} plan={plan} />
      </Route>
      <Route path='/savings' component={Savings} />
      <Route path='/contribution' component={Contribution} />
      <Route path='/roi' component={Roi} />
      <Route path='/result' component={Result} />
      <Route exact path='/' component={Home} />
      {/* <Route path='/register' component={Registration} />
      <Route exact path='/' component={Nav} />
      <Route exact path='/' component={Users} />
      <Route exact path='/' component={PingRoutes} /> */}
    </div>
  )
}

export default App

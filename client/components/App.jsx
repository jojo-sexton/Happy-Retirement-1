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
import Age from './main/Age'

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
  const addSavings = (savings) => {
    setPlan({ ...plan, savings })
  }

  const addContribution = (contribution) => {
    setPlan({ ...plan, contribution })
  }

  const addRoi = (roi) => {
    setPlan({ ...plan, roi })
  }

  const addAge = (ageNow) => {
    setPlan({ ...ageNow, ageNow })
  }

  return (
    <div className='app'>
      <Route exact path='/lifestyle' component={Lifestyle} >
        <Lifestyle addLifestyle={addLifestyle} plan={plan} />
      </Route>

      <Route exact path='/savings' component={Savings} >
        <Savings plan={plan} addSavings={addSavings} />
      </Route>

      <Route exact path='/contribution' component={Contribution} >
        <Contribution plan={plan} addContribution={addContribution}/>
      </Route>

      <Route exact path='/roi' component={Roi} >
        <Roi plan={plan} addRoi={addRoi} />
      </Route>

      <Route exact path='/result' component={Result} >
        <Result plan={plan}/>
      </Route>

      <Route exact path='/age' component={Age} >
        <Age plan={plan} addAge={addAge}/>
      </Route>

      <Route exact path='/' component={Home} />
      {/* <Route path='/register' component={Registration} />
      <Route exact path='/' component={Nav} />
      <Route exact path='/' component={Users} />
      <Route exact path='/' component={PingRoutes} /> */}
    </div>
  )
}

export default App

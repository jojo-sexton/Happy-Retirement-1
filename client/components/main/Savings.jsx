import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addSavings } from '../../actions/plan'

export default function Savings () {
  const dispatch = useDispatch()

  function submitSavings (e) {
    if (e.keyCode === 13) {
      const action = addSavings(e.target.value)
      console.log(action)
      dispatch(action)
    }
  }
  return (
    <div className='home container'>
      <h2>
        Step 2 of 4: Enter your current retirement savings balance
      </h2>
      <h3>
          Note if you're a couple, add a sum of both retirement balances
      </h3>

      <label className="input"> $
        <input
          placeholder='Enter your savings'
        />
      </label>

      <div>
        <Link to="/contribution">
          <button onClick={submitSavings}>
              Next step
          </button>
        </Link>
      </div>

    </div>
  )
}

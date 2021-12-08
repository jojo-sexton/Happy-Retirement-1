import React from 'react'
import { Link } from 'react-router-dom'

export default function Savings ({ plan, addSavings }) {
  function submitSavings (e) {
    if (e.keyCode === 13) {
      addSavings(e.target.value)
    }
  }
  console.log(plan)

  return (
    <div className='home container'>
      <h2>
        Step 2 of 4: Enter your current retirement savings balance
      </h2>
      <h3>
          Note if you're a couple, add a sum of both retirement balances
      </h3>

      <form >
        <label > Your Savings: </label>
        <input
          type='number'
          placeholder='enter your savings here'
          onKeyUp={submitSavings}
          required
        />

      </form>

      <div>
        <Link to="/contribution">
          <button>
              Next step
          </button>
        </Link>
      </div>

    </div>
  )
}

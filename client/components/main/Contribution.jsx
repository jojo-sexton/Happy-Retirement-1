import React from 'react'
import { Link } from 'react-router-dom'

export default function Contribution ({plan, addContribution}) {
  function submitContribution (e) {
    if (e.keyCode === 13) {
      addContribution(e.target.value)
    }
  }
  console.log(plan)

  return (
    <div className='home container'>
      <h3>
        Step 3 of 4: Enter your retirement savings contributions
      </h3>
      <form >
        <label > Your contribution toward your retirement per annum: </label>
        <input
          type='number'
          placeholder='enter your contribution per year'
          onKeyUp={submitContribution}
          required
        />

      </form>

      <div>
        <Link to="/roi">
          <button>
              Next step
          </button>
        </Link>
      </div>

    </div>
  )
}

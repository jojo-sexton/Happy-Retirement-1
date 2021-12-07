import React from 'react'
import { Link } from 'react-router-dom'

export default function Savings () {
  return (
    <div className='home container'>
    <h2>
        Step 2 of 4: Enter your current retirement savings balance
      </h2>
      <p>Note if you're a couple, add a sum of both retirement balances</p>
      <Link to="/contribution">
        <button>
          Next step
        </button>
      </Link>

    </div>
  )
}

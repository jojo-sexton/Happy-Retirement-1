import React from 'react'
import { Link } from 'react-router-dom'

export default function Contribution () {
  return (
    <div className="home container">
      <h2>
        Step 3 of 4: Enter your retirement savings contributions
      </h2>
     
      <Link to="/roi">
        <button>
          Next Step
        </button>
      </Link>
    </div>
  )
}

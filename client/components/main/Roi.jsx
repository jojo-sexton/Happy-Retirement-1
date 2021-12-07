import React from 'react'
import { Link } from 'react-router-dom'

const Roi = () => {
  return (
    <div className="home container">
    <h2>
        Step 4 of 4: Enter the details of your retirement investment fund
      </h2>
     
      <Link to="/result">
        <button>
          Show result
        </button>
      </Link>
    </div>
  )
}

export default Roi

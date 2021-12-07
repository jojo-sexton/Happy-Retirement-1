import React from 'react'
import { Link } from 'react-router-dom'

const Result = () => {
  const calculation = 'Nper = Log((Pmt/Rate - FV) / (Pmt/Rate + PV)) / Log(1+Rate)'
  return (
    <div className= "result container" >
      <p> Based on your input, your retirement age is </p>
      <h2>RESULT</h2>
      <Link to="/">
        <button>
          Return to Home
        </button>
      </Link>
    </div>

  )
}

export default Result

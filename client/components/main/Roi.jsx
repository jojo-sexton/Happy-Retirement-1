import React from 'react'
import { Link } from 'react-router-dom'

const Roi = ({plan, addRoi}) => {
  function submitRoi (e) {
    if (e.keyCode === 13) {
      addRoi(e.target.value)
    }
  }
  console.log(plan)

  return (
    <div className="home container">
      <h2>
        Step 5 of 5: Enter the return of your retirement investment fund
      </h2>
      <form >
        <label > Enter the return (%) of your retirement investment fund per annum: </label>
        <input
          type='number'
          placeholder='enter your contribution per year'
          onKeyUp={submitRoi}
          required
        />

      </form>

      <Link to="/result">
        <button>
          Show result
        </button>
      </Link>
    </div>
  )
}

export default Roi

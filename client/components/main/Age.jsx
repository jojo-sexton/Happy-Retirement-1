import React from 'react'
import { Link } from 'react-router-dom'

export default function Age ({ plan, addAge }) {
  function submitAge (e) {
    if (e.keyCode === 13) {
      addAge(e.target.value)
    }
  }
  console.log(plan)

  return (
    <div className='home container'>
      <h2>
        Step 1 of 5: Enter your age
      </h2>

      <form >
        <label > Your age: </label>
        <input
          type='number'
          placeholder='enter your age here'
          onKeyUp={submitAge}
          required
        />

      </form>

      <div>
        <Link to="/lifestyle">
          <button>
              Next step
          </button>
        </Link>
      </div>

    </div>
  )
}
